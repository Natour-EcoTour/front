import apiClient from '../apiClient';

export interface MyInfoResponse {
    id: number;
    username: string;
    email: string;
    photoUrl?: string;
}

export const getMyInfo = async () => {
    try {
        const response = await apiClient.get('users/me/');
        return response.data as MyInfoResponse;
    } catch (error) {
        throw error;
    }
};
