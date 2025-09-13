import apiClient from "../apiClient";

export const changePointStatus = async (pointId: string) => {
    try {
        const response = await apiClient.put(`/points/${pointId}/status/`);
        return response.data;
    } catch (error) {
        console.error("Error changing point status:", error);
        throw error;
    }
};
