import axios from 'axios';
import { toast } from 'react-toastify';


export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});


apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem('access');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data !== undefined && !config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await localStorage.removeItem('access');
      await localStorage.removeItem('refresh');
      
      const errorMessage = error.response?.data?.error || 
                          error.response?.data?.message || 
                          error.response?.data?.detail
      
      toast.error(errorMessage);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
