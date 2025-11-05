/* LIST USERS SERVICE */
import apiClient from "../apiClient";

// User list parameters
interface UserListParams {
    page?: number;
    username?: string;
}

// User item interface
export interface UserItem {
    id: string;
    username: string;
    masked_email: string;
    is_active: boolean;
    is_staff: boolean;
    points: number;
}

// User list response interface
export interface UserListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: UserItem[];
}

// List users function
export const listUsers = async (params: UserListParams) => {
    try {
        const response = await apiClient.get("users/list/", { params });
        console.log('User list response:', response.data);
        return response.data as UserListResponse;
    } catch (error: unknown) {
        throw error;
    }
}