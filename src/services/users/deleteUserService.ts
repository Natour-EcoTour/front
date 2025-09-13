import apiClient from "../apiClient";

export const deleteUser = async (userId: string) => {
    try {
        const response = await apiClient.delete(`users/${userId}/delete/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}