import { IsString, IsOptional, IsEnum, IsUrl, ValidateIf } from 'class-validator';
import { Status } from '@prisma/client';

export class CreatePostDto {
  @IsString()
  title!: string;

  @IsString()
  summaryDescription!: string;

  @IsOptional()
  @IsString()
  fullDescription?: string;

  @IsOptional()
  @ValidateIf((o) => o.url !== '' && o.url !== null)
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
