/* USER DETAILS SERVICE */
import apiClient from "../apiClient";

// User details response interface
export interface UserDetailsResponse {
    id: number;
    username: string;
    photo?: string;
    masked_email: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    points: number;
}

// Get user details function
export const getUserDetails = async (userId: string) => {
    try {
        const response = await apiClient.get(`users/${userId}/`);
        return response.data as UserDetailsResponse;
    } catch (error) {
        throw error;
    }
};
