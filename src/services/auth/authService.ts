import apiClient from '../apiClient';

export const loginUser = async (email: string, password: string, remember_me: boolean) => {
    try {
        const response = await apiClient.post('users/login/', {
            email,
            password,
            remember_me,
        });
        return response.data;
    } catch (error: unknown) {
        throw error;
    }
}
