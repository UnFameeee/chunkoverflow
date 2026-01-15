import { IsOptional, IsString } from 'class-validator';

export class ResponseDto<T = unknown> {
  result?: T;
  message?: string;

  static success<T>(data?: T): ResponseDto<T> {
    return { result: data };
  }

  static error(message: string): ResponseDto {
    return { message };
  }
}

export class PaginationDto {
  page!: number;
  pageSize!: number;
  total!: number;
  totalPages!: number;
  hasNext!: boolean;
  hasPrev!: boolean;
}

export class PaginatedResponseDto<T> {
  result?: T;
  pagination?: PaginationDto;
  message?: string;

  static success<T>(data: T, pagination: PaginationDto): PaginatedResponseDto<T> {
    return {
      result: data,
      pagination,
    };
  }

  static error(message: string): PaginatedResponseDto<unknown> {
    return { message };
  }
}
