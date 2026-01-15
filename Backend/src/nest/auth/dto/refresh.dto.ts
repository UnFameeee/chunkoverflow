import { IsString, IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty()
  refreshToken!: string;
}

export interface RefreshTokenResponseData {
  accessToken: string;
  refreshToken: string;
}
