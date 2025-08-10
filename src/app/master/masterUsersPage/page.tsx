'use client';
import { mockUsers } from '@/mock/usersMocked';
import { usePagination } from '@/app/hooks/usePagination';
import { UsersTable } from '@/components/UsersTable/UsersTable';
import { Pagination } from '@/components/Pagination/Pagination';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle';
import { SearchInput } from '@/components/SearchInput/SearchInput';

export default function MasterUsersPage() {
  const itemsPerPage = 12;
  const totalItems = mockUsers.users.length;

  const {
    currentData: currentUsers,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination(mockUsers.users, itemsPerPage);

  const handleEdit = (id: string) => {
    console.log('Edit', id);
  };
  const handleDelete = (id: string) => {
    console.log('Delete', id);
  };
  const handleView = (id: string) => {
    console.log('View', id);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      <MasterPageTitle text="Usuários" />

      <SearchInput
        placeholder="Digite o nome do usuário..."
      />

      <UsersTable
        users={currentUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        goToPage={goToPage}
      />
    </div>
  );
}
