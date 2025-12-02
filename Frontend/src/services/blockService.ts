import api from '@/lib/api';
import { Block, ApiResponse, PaginatedResponse } from '@/types';

export interface BlockListPayload {
  page?: number;
  pageSize?: number;
  status?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface AdminBlockListPayload extends BlockListPayload {
  includeArchived?: boolean;
}

export const blockService = {
  // Public endpoints
  getAllBlocks: async (payload?: BlockListPayload) => {
    const response = await api.post<PaginatedResponse<Block>>('/blocks/list', payload || {});
    return response.data;
  },

  getBlockBySlug: async (slug: string) => {
    const response = await api.get<ApiResponse<Block>>(`/blocks/${slug}`);
    return response.data;
  },

  // Admin endpoints
  getAdminBlocks: async (payload?: AdminBlockListPayload) => {
    const response = await api.post<PaginatedResponse<Block>>('/blocks/admin/list', payload || {});
    return response.data;
  },

  getBlockById: async (id: number) => {
    const response = await api.get<ApiResponse<Block>>(`/blocks/admin/${id}`);
    return response.data;
  },

  createBlock: async (data: any) => {
    const response = await api.post<ApiResponse<Block>>('/blocks', data);
    return response.data;
  },

  updateBlock: async (id: number, data: any) => {
    const response = await api.put<ApiResponse<Block>>(`/blocks/${id}`, data);
    return response.data;
  },

  archiveBlock: async (id: number) => {
    const response = await api.patch<ApiResponse<Block>>(`/blocks/${id}/archive`);
    return response.data;
  },

  unarchiveBlock: async (id: number) => {
    const response = await api.patch<ApiResponse<Block>>(`/blocks/${id}/unarchive`);
    return response.data;
  },

  deleteBlock: async (id: number) => {
    const response = await api.delete<ApiResponse<void>>(`/blocks/${id}`);
    return response.data;
  },
};
