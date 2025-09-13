import apiClient from "../apiClient";

export const deletePoint = async (pointId: string) => {
    try {
        const response = await apiClient.delete(`/points/${pointId}/delete/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting point:', error);
        throw error;
    }
}