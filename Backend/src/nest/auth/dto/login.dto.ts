import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    username: string;
  };
}
