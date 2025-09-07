import apiClient from "../apiClient";


export interface UserPoints {
    count: number;
    points: Point[];
}

export interface Point {
    id: number;
    name: string;
    is_active: boolean;
    created_at: Date;
    point_type: string;
    avg_rating: number;
    views: number;
}


export const getUserPoints = async (userId: string) => {
    try {
        const response = await apiClient.get(`users/${userId}/points/`);
        return response.data as UserPoints;
    }
    catch (error: unknown) {
        throw error;
    }
}