/* DELETE USER SERVICE */
import apiClient from "../apiClient";

// Delete user function
export const deleteUser = async (userId: string) => {
    try {
        const response = await apiClient.delete(`users/${userId}/delete/`);
        return response.data;
    } catch (error) {
        throw error;
    }
}