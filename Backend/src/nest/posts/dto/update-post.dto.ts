import { IsString, IsOptional, IsEnum, IsUrl } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  summaryDescription?: string;

  @IsOptional()
  @IsString()
  fullDescription?: string;

  @IsOptional()
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
