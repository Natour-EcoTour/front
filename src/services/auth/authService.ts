import { toast } from 'react-toastify';
import apiClient from '../apiClient';

export interface LoginResponse {
    refresh: string;
    access: string;
    user: {
        id: string;
        username: string;
        email: string;
        is_active: boolean;
        role: string;
    };
}

export const loginUser = async (email: string, password: string, remember_me: boolean) => {
    try {
        const response = await apiClient.post('users/login/', {
            email,
            password,
            remember_me,
        });

        if (response.data.user.role !== 'master') {
            toast.error('Usuário não é administrador.');
            throw new Error('Acesso negado: Usuário não é administrador.');
        }

        return response.data;
    } catch (error: unknown) {
        throw error;
    }
}
