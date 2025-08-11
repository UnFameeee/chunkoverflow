import axios from 'axios';
import { Block, ApiResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const blocksApi = {
  getAll: async (): Promise<Block[]> => {
    const response = await api.get<ApiResponse<Block[]>>('/api/blocks');
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.message || 'Failed to fetch blocks');
  },

  getBySlug: async (slug: string): Promise<Block> => {
    const response = await api.get<ApiResponse<Block>>(`/api/blocks/${slug}`);
    if (response.data.success && response.data.data) {
      return response.data.data;
    }
    throw new Error(response.data.message || 'Failed to fetch block');
  },
};

export default api;
