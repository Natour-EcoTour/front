import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { loginUser } from "@/services/auth/authService";
import axios from "axios";

export const login = async (data: { email: string; password: string; rememberMe: boolean }) => {
    try {
        const { access, refresh } = await loginUser(data.email, data.password, data.rememberMe);

        localStorage.setItem('access', access);
        localStorage.setItem('refresh', refresh);

        return { access, refresh };
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = async (router: AppRouterInstance) => {
    try {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');

        router.replace('/');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

export const validateTokenAndRedirect = async (router: AppRouterInstance): Promise<boolean> => {
    try {
        const accessToken = localStorage.getItem('access');

        if (!accessToken) {
            return false;
        }

        const silentApiClient = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            timeout: 10000,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const response = await silentApiClient.get('users/me/');

        if (response.status === 200) {
            router.replace('/master/inicio');
            return true;
        }

        return false;
    } catch (error) {
        console.error('Token validation failed:', error);

        try {
            router.replace('/');
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
        } catch (clearError) {
            console.error('Error clearing invalid tokens:', clearError);
        }

        return false;
    }
};
