import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './public.decorator';
import { CurrentUser, CurrentUserData } from './current-user.decorator';
import { LoginDto, LoginResponseData } from './dto/login.dto';
import { RefreshTokenDto, RefreshTokenResponseData } from './dto/refresh.dto';
import { ResponseDto } from '../common/dto/response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ResponseDto<LoginResponseData>> {
    const data = await this.authService.login(loginDto);
    return ResponseDto.success(data);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@CurrentUser('id') userId: number): Promise<ResponseDto<void>> {
    await this.authService.logout(userId);
    return ResponseDto.success();
  }

  @Public()
  @Post('refresh')
  async refreshToken(@Body() refreshDto: RefreshTokenDto): Promise<ResponseDto<RefreshTokenResponseData>> {
    const data = await this.authService.refreshToken(refreshDto.refreshToken);
    return ResponseDto.success(data);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: CurrentUserData): Promise<ResponseDto<CurrentUserData>> {
    const data = await this.authService.getProfile(user.id);
    return ResponseDto.success(data);
  }
}
