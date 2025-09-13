import apiClient from '../apiClient';

export type TermResponse = {
    id: number;
    content: string;
    updated_at: string;
};

export const getTerm = async (termId: number) => {
    try {
        const response = await apiClient.get(`terms/${termId}/`);
        return response.data as TermResponse;
    } catch (error: unknown) {
        throw error;
    }
}
