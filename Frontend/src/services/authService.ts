import api from '@/lib/api';
import { AuthResponse, ApiResponse, User } from '@/types';

export const authService = {
  login: async (username: string, password: string) => {
    const response = await api.post<AuthResponse>('/auth/login', {
      username,
      password,
    });
    return response.data;
  },

  logout: async () => {
    const response = await api.post<ApiResponse<void>>('/auth/logout');
    return response.data;
  },

  refreshToken: async (refreshToken: string) => {
    const response = await api.post<AuthResponse>('/auth/refresh', {
      refreshToken,
    });
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get<ApiResponse<User>>('/auth/profile');
    return response.data;
  },
};
