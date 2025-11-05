/* MY INFO SERVICE */
import apiClient from '../apiClient';

// My info response interface
export interface MyInfoResponse {
    id: number;
    username: string;
    email: string;
    photoUrl?: string;
}

// Get my info function
export const getMyInfo = async () => {
    try {
        const response = await apiClient.get('users/me/');
        return response.data as MyInfoResponse;
    } catch (error) {
        throw error;
    }
};
