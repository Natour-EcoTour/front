'use client'
import { Pagination } from '@/components/Pagination/Pagination';
import { ReviewsTable } from '@/components/ReviewsTable/ReviewsTable'
import { getReviews } from '@/services/reviews/getReviewsService';

import MasterPageTitle from '@/components/MasterPageTitle/MasterPageTitle'
import { useEffect, useState } from 'react';

interface ReviewItem {
    id: string;
    user: string;
    point: string;
    rating: number;
}

interface ReviewsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{
        id: number;
        username: string;
        point_name: string;
        rating: number;
    }>;
}

export default function MasterReviewsPage() {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            try {
                const reviewsData: ReviewsResponse = await getReviews({ page: currentPage });
                
                const transformedReviews: ReviewItem[] = reviewsData.results.map(review => ({
                    id: review.id.toString(),
                    user: review.username,
                    point: review.point_name,
                    rating: review.rating
                }));
                
                setReviews(transformedReviews);
                setTotalItems(reviewsData.count);
                
                if (currentPage === 1 && reviewsData.results.length > 0) {
                    setItemsPerPage(reviewsData.results.length);
                }

                const pageSize = currentPage === 1 ? reviewsData.results.length : itemsPerPage;
                const calculatedTotalPages = Math.ceil(reviewsData.count / (pageSize || 15));
                setTotalPages(calculatedTotalPages);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setReviews([]);
                setTotalItems(0);
                setTotalPages(0);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, [currentPage, itemsPerPage]);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    if (isLoading) {
        return (
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Avaliações" />
                <div className="flex justify-center items-center h-64">
                    <div className="text-lg text-gray-600">Carregando avaliações...</div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="p-6 min-h-screen">
                <MasterPageTitle text="Avaliações" />
                <ReviewsTable
                    reviews={reviews}
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