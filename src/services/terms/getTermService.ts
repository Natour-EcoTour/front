/* GET TERM SERVICE */
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL as string;

// Term response interface
export type TermResponse = {
    id: number;
    content: string;
    updated_at: string;
};

// Get term function
export const getTerm = async (termId: number) => {
    try {
        const response = await axios.get(`${API}terms/${termId}/`);
        return response.data as TermResponse;
    } catch (error: unknown) {
        throw error;
    }
}
