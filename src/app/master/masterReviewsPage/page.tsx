'use client'
import { usePagination } from '@/app/hooks/usePagination';
import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import { Pagination } from '@/components/Pagination/Pagination';
import { ReviewsTable } from '@/components/ReviewsTable/ReviewsTable'
import { mockPointReviews } from '@/mock/usersMocked';

export default function MasterReviewsPage() {
    const itemsPerPage = 12;
    const totalItems = mockPointReviews.reviews.length;
    const {
        currentData: currentReviews,
        currentPage,
        totalPages,
        goToPage,
    } = usePagination(mockPointReviews.reviews, itemsPerPage);
    return (
        <>
            <div className="p-6 bg-gray-50 min-h-screen">
                <MasterPageTitle text="Avaliações" />
                <ReviewsTable
                    reviews={currentReviews}
                />
                <Pagination
                    page='avaliações'
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