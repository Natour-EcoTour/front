import apiClient from "../apiClient";

export interface UserDetailsResponse {
    id: number;
    username: string;
    photo?: string;
    email: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    points: number;
}

export const getUserDetails = async (userId: string) => {
    try {
        const response = await apiClient.get(`users/${userId}/`);
        return response.data as UserDetailsResponse;
    } catch (error) {
        throw error;
    }
};
