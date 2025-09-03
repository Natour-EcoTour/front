import apiClient from "../apiClient";

interface ReviewsParams {
    page?: number;
}

interface ReviewItem {
    id: number;
    username: string;
    point_name: string;
    rating: number;
}

interface ReviewsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ReviewItem[];
}

export const getReviews = async (params: ReviewsParams = {}) => {
    try {
        const page = params.page || 1;
        const response = await apiClient.get(`points/reviews/?page=${page}`);
        return response.data as ReviewsResponse;
    } catch (error: unknown) {
        throw error;
    }
}