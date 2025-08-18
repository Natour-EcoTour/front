'use client'

import { useState } from 'react';
import { usePagination } from '@/app/hooks/usePagination';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import { Pagination } from '@/components/Pagination/Pagination';
import { PendingPointsTable } from '@/components/PendingPointsTable/PendingPointsTable';
import { PointsTable } from '@/components/PointsTable/PointsTable';
import PointStatusButton from '@/components/PointStatusButton/PointStatusButton';
import SearchInput from '@/components/SearchInput/SearchInput'
import { mockPoints } from '@/mock/usersMocked';
import { RefusedPointsTable } from '@/components/RefusedPoinstTable/RefusedPointsTable';

export default function MasterPointsPage() {
    const [selectedStatus, setSelectedStatus] = useState<string>("pending");

    const filteredPoints = mockPoints.points.filter(point => {
        switch (selectedStatus) {
            case "pending":
                return point.status == null;
            case "approved":
                return point.status === true;
            case "rejected":
                return point.status === false;
            default:
                return true;
        }
    });

    const itemsPerPage = 12;
    const totalItems = filteredPoints.length;
    const {
        currentData: currentPoints,
        currentPage,
        totalPages,
        goToPage,
    } = usePagination(filteredPoints, itemsPerPage);
    const handleEdit = (id: string) => {
        console.log('Edit', id);
    };
    const handleDelete = (id: string) => {
        console.log('Delete', id);
    };
    return (
        <>
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Pontos" />

                <PointStatusButton
                    selected={selectedStatus}
                    onStatusChange={setSelectedStatus}
                />

                <SearchInput
                    placeholder='Digite o nome do ponto...'
                />

                {selectedStatus === "pending" && (
                    <PendingPointsTable
                        points={currentPoints}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}

                {selectedStatus === "approved" && (
                    <PointsTable
                        points={currentPoints}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}

                {selectedStatus === "rejected" && (
                    <RefusedPointsTable
                        points={currentPoints}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
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