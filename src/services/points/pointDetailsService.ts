import apiClient from "../apiClient";
import { PointType } from "@/utils/pointTypes";

export type { PointType } from "@/utils/pointTypes";

export interface PointDetailsResponse {
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
    point_type: PointType;
    link: string;
    latitude: number;
    longitude: number;
    zip_code: string;
    city: string;
    neighborhood: string;
    state: string;
    street: string;
    number: number | null;
    photos: string[];
}

export const pointDetails = async (pointId: string): Promise<PointDetailsResponse> => {
    try {
        const response = await apiClient.get(`points/${pointId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching point details:', error);
        throw error;
    }
};