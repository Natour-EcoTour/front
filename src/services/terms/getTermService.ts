import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL as string;

export type TermResponse = {
    id: number;
    content: string;
    updated_at: string;
};

export const getTerm = async (termId: number) => {
    try {
        const response = await axios.get(`${API}terms/${termId}/`);
        return response.data as TermResponse;
    } catch (error: unknown) {
        throw error;
    }
}
