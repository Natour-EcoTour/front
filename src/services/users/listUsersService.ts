import apiClient from "../apiClient";

interface UserListParams {
    page?: number;
    username?: string;
}

export interface UserItem {
    id: string;
    username: string;
    email: string;
    is_active: boolean;
    is_staff: boolean;
}

export interface UserListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: UserItem[];
}

export const listUsers = async (params: UserListParams) => {
    try {
        const response = await apiClient.get("users/list/", { params });
        console.log('User list response:', response.data); // Log the entire response data
        return response.data as UserListResponse;
    } catch (error: unknown) {
        throw error;
    }
}