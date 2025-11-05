/* GET POINTS SERVICE */
import apiClient from "../apiClient";

// Points list parameters
interface PoinstListParams {
    page?: number,
    name?: string,
    status?: string;
}

// Point item interface
export interface PointItem {
    id: number;
    is_active: boolean;
    name: string;
    views: number;
    avg_rating: number;
    description: string;
    week_start: string;
    week_end: string;
    open_time: string;
    close_time: string;
    point_type: string;
    link: null | string;
    latitude: number | null;
    longitude: number | null;
    zip_code: null | string;
    city: null | string;
    neighborhood: null | string;
    state: null | string;
    street: null | string;
    number: null | string;
    photos: string[];
}

// Point list response interface
export interface PointListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PointItem[];
}

// List points function
export const listPoints = async (params: PoinstListParams) => {
    try {
        const response = await apiClient.get("points/", { params });
        console.log('Point list response:', response.data);
        return response.data as PointListResponse;
    } catch (error: unknown) {
        throw error;
    }
}