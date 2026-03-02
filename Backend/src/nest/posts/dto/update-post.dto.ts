import { IsString, IsOptional, IsEnum, IsUrl, ValidateIf } from 'class-validator';
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
  @ValidateIf((o) => o.url !== '' && o.url !== null)
  @IsUrl()
  url?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
}
