export interface Block {
  id: string;
  title: string;
  slug: string;
  summaryDescription: string;
  fullDescription: string;
  iconPath?: string;
  status: 'PUBLISHED' | 'IN_DEVELOPMENT' | 'DRAFT';
  url?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
