'use client';
import { useEffect, useState } from 'react';
import { UsersTable } from '@/components/UsersTable/UsersTable';
import { Pagination } from '@/components/Pagination/Pagination';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle';

import { listUsers, UserItem, UserListResponse } from '@/services/users/listUsersService';

export default function MasterUsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const usersData: UserListResponse = await listUsers({ page: currentPage });
        setUsers(usersData.results);
        setTotalItems(usersData.count);

        const transformedUsers: UserItem[] = usersData.results.map(user => ({
          id: user.id,
          username: user.username,
          email: user.email,
          is_active: user.is_active,
          is_staff: user.is_staff
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
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  }

  if (isLoading) {
    return (
      <div className="p-6 min-h-screen">
        <MasterPageTitle text="Usuários" />
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Carregando usuários...</div>
        </div>
      </div>
    );
  }

  const handleDelete = (id: string) => {
    console.log('Delete', id);
  };

  return (
    <div className="p-6 min-h-screen">

      <MasterPageTitle text="Usuários" />

      <SearchInput
        placeholder="Digite o nome do usuário..."
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
