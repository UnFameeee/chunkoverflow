import { IsOptional, IsInt, Min, IsString, IsEnum, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { Status } from '@prisma/client';

export class ListQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  pageSize?: number = 10;

  @IsOptional()
  @IsEnum(['ALL', ...Object.values(Status)])
  status?: Status | 'ALL';

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  sortBy?: string = 'createdAt';

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc' = 'desc';

  @IsOptional()
  includeArchived?: boolean = false;
}
