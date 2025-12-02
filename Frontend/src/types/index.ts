export interface Block {
  id: number;
  title: string;
  slug: string;
  summaryDescription: string;
  fullDescription: string | null;
  iconPath: string | null;
  url: string | null;
  status: 'PENDING' | 'IN_DEVELOPMENT' | 'PUBLISHED';
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  username: string;
  lastLogin: string | null;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: number;
      username: string;
    };
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: PaginationMeta;
  message?: string;
}
