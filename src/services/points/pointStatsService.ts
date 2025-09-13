import apiClient from "../apiClient";

export const changeUserStatus = async (userId: string, status: boolean, deactivation_reason: string) => {
    try {
        if (status === true) {
            const response = await apiClient.put(`users/${userId}/status/`);
            return response.data;
        }
        else {
            const response = await apiClient.put(`users/${userId}/status/`, {
                deactivation_reason,
            });
            return response.data;
        }
    } catch (error: unknown) {
        throw error;
    }
}