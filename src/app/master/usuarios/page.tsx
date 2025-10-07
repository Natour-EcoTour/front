'use client';
import { useEffect, useState } from 'react';
import { UsersTable } from '@/components/UsersTable/UsersTable';
import { Pagination } from '@/components/Pagination/Pagination';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle';
import { useDebounce } from '@/hooks/useDebounce';

import { listUsers, UserItem, UserListResponse } from '@/services/users/listUsersService';
import { deleteUser } from '@/services/users/deleteUserService';
import Image from 'next/image';

export default function MasterUsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const searchParams: { page: number; username?: string } = { page: currentPage };
        
        if (debouncedSearchTerm.trim()) {
          searchParams.username = debouncedSearchTerm.trim();
        }

        const usersData: UserListResponse = await listUsers(searchParams);
        setUsers(usersData.results);
        setTotalItems(usersData.count);

        const transformedUsers: UserItem[] = usersData.results.map(user => ({
          id: user.id,
          username: user.username,
          masked_email: user.masked_email,
          is_active: user.is_active,
          is_staff: user.is_staff,
          points: user.points,
        }));

        setUsers(transformedUsers);
        setTotalItems(usersData.count);

        if (currentPage === 1 && usersData.results.length > 0) {
          setItemsPerPage(usersData.results.length);
        }
        const pageSize = currentPage === 1 ? usersData.results.length : itemsPerPage;
        const calculatedTotalPages = Math.ceil(usersData.count / (pageSize || 12));
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]);
        setTotalItems(0);
        setTotalPages(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, itemsPerPage, debouncedSearchTerm]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="p-6 min-h-screen">
        <MasterPageTitle text="Usuários" />
        <div className="flex justify-center items-center h-64">
          <Image
            src="/black_loading.svg"
            alt="Carregando"
            width={40}
            height={40}
            unoptimized
            className="animate-spin"
          />
          <div className="text-lg text-black font-bold">Carregando usuários...</div>
        </div>
      </div>
    );
  }

  const handleDelete = async (id: string) => {
    console.log('Delete', id);
    try {
      setIsLoading(true);
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen">

      <MasterPageTitle text="Usuários" />

      <SearchInput
        placeholder="Digite o nome do usuário..."
        value={searchTerm}
        onChange={handleSearchChange}
        isLoading={isLoading}
      />

      <UsersTable
        users={users}
        onDelete={handleDelete}
      />

      <Pagination
        page='usuários'
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        goToPage={goToPage}
      />
    </div>
  );
}
