import apiClient from "../apiClient";
export const resetUserPassword = async (userId: string) => {
    try {
        const response = await apiClient.put(`users/${userId}/update/password/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}
