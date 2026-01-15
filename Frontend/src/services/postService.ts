import api from '@/lib/api';
import { Post, ApiResponse, PaginatedResponse } from '@/types';

export interface PostListPayload {
  page?: number;
  pageSize?: number;
  status?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface AdminPostListPayload extends PostListPayload {
  includeArchived?: boolean;
}

export const postService = {
  // Public endpoints
  getAllPosts: async (payload?: PostListPayload) => {
    const response = await api.post<PaginatedResponse<Post>>('/posts/list', payload || {});
    return response.data;
  },

  getPostBySlug: async (slug: string) => {
    const response = await api.get<ApiResponse<Post>>(`/posts/${slug}`);
    return response.data;
  },

  // Admin endpoints
  getAdminPosts: async (payload?: AdminPostListPayload) => {
    const response = await api.post<PaginatedResponse<Post>>('/posts/admin/list', payload || {});
    return response.data;
  },

  getPostById: async (id: number) => {
    const response = await api.get<ApiResponse<Post>>(`/posts/admin/${id}`);
    return response.data;
  },

  createPost: async (postData: Partial<Post>, iconFile?: File) => {
    const formData = new FormData();
    formData.append('title', postData.title || '');
    formData.append('summaryDescription', postData.summaryDescription || '');
    if (postData.fullDescription) {
      formData.append('fullDescription', postData.fullDescription);
    }
    if (postData.url) {
      formData.append('url', postData.url);
    }
    if (postData.status) {
      formData.append('status', postData.status);
    }
    if (iconFile) {
      formData.append('icon', iconFile);
    }

    const response = await api.post<ApiResponse<Post>>('/posts', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  updatePost: async (id: number, postData: Partial<Post>, iconFile?: File) => {
    const formData = new FormData();
    if (postData.title !== undefined) {
      formData.append('title', postData.title);
    }
    if (postData.summaryDescription !== undefined) {
      formData.append('summaryDescription', postData.summaryDescription);
    }
    if (postData.fullDescription !== undefined) {
      formData.append('fullDescription', postData.fullDescription);
    }
    if (postData.url !== undefined) {
      formData.append('url', postData.url);
    }
    if (postData.status !== undefined) {
      formData.append('status', postData.status);
    }
    if (iconFile) {
      formData.append('icon', iconFile);
    }

    const response = await api.put<ApiResponse<Post>>(`/posts/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  archivePost: async (id: number) => {
    const response = await api.patch<ApiResponse<Post>>(`/posts/${id}/archive`);
    return response.data;
  },

  unarchivePost: async (id: number) => {
    const response = await api.patch<ApiResponse<Post>>(`/posts/${id}/unarchive`);
    return response.data;
  },

  deletePost: async (id: number) => {
    const response = await api.delete<ApiResponse<void>>(`/posts/${id}`);
    return response.data;
  },
};

