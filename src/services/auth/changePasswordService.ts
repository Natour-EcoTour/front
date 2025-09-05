import apiClient from '@/services/apiClient';
// TODO AJUSTAR SERIALIZER PARA QUANDO O USUARIO COLOCA SENHA ANTIGA ERRADA
export const changeUserPassword = async (old_password: string,
    new_password: string,
    confirm_password: string) => {
    try {
        const response = await apiClient.put('users/me/update/password/', {
            old_password,
            new_password,
            confirm_password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}