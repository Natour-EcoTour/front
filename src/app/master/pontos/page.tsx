'use client'

import { useState } from 'react';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import { PendingPointsTable } from '@/components/PendingPointsTable/PendingPointsTable';
import { PointsTable } from '@/components/PointsTable/PointsTable';
import PointStatusButton from '@/components/PointStatusButton/PointStatusButton';
import { RefusedPointsTable } from '@/components/RefusedPoinstTable/RefusedPointsTable';

export default function MasterPointsPage() {
    const [selectedStatus, setSelectedStatus] = useState<string>("pending");
    return (
        <>
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Pontos" />

                <PointStatusButton
                    selected={selectedStatus}
                    onStatusChange={setSelectedStatus}
                />

                {selectedStatus === "pending" && (
                    <PendingPointsTable />
                )}

                {selectedStatus === "approved" && (
                    <PointsTable />
                )}

                {selectedStatus === "rejected" && (
                    <RefusedPointsTable />
                )}
            </div>
        </>
    )
}