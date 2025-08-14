'use client'

import { usePagination } from '@/app/hooks/usePagination';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import { Pagination } from '@/components/Pagination/Pagination';
import { PointsTable } from '@/components/PointsTable/PointsTable';
import SearchInput from '@/components/SearchInput/SearchInput'
import { mockPoints } from '@/mock/usersMocked';

export default function MasterPointsPage() {
    const itemsPerPage = 12;
    const totalItems = mockPoints.points.length;
    const {
        currentData: currentPoints,
        currentPage,
        totalPages,
        goToPage,
    } = usePagination(mockPoints.points, itemsPerPage);
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
        <>
            <div className="p-6 bg-gray-50 min-h-screen">
                <MasterPageTitle text="Pontos" />

                <SearchInput
                    placeholder='Digite o nome do ponto...'
                />

                <PointsTable
                    points={currentPoints}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onView={handleView}
                />

                <Pagination
                    page='pontos'
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                    goToPage={goToPage}
                />
            </div>
        </>
    )
}