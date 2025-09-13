import apiClient from "../apiClient";

interface Body {
    status: boolean;
    is_active: boolean;
}

export const changePointStatus = async (pointId: string, body: Body) => {
    try {
        const response = await apiClient.put(`/points/${pointId}/approve/`, body);
        return response.data;
    } catch (error) {
        console.error("Error changing point status:", error);
        throw error;
    }
};
