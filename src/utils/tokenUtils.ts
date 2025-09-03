import { Router } from "next/router";
import { loginUser } from "../../services/auth/authService";

export const login = async (data: { email: string; password: string; rememberMe: boolean }) => {
    try {
        const { access, refresh } = await loginUser(data.email, data.password, data.rememberMe);

        await localStorage.setItem('access', access);
        await localStorage.setItem('refresh', refresh);
        
        return { access, refresh };
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = async (router: Router) => {
    try {
        await localStorage.removeItem('access');
        await localStorage.removeItem('refresh');

        router.replace('/');
    } catch (error) {
        console.error('Error during logout:', error);
    }
};