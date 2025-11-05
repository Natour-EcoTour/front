/* UPDATE TERMS SERVICE */
import apiClient from '../apiClient';

// Update term function
export const updateTerm = async (termId: number, content: string) => {
    try {
        const response = await apiClient.put(`terms/${termId}/update/`, { content });
        return response.data;
    } catch (error) {
        console.error("Error updating term:", error);
        throw error;
    }
};
