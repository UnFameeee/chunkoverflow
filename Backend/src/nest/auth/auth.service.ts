import { Injectable, UnauthorizedException, BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../database/prisma.service';
import { LoginDto, LoginResponseData } from './dto/login.dto';
import { RefreshTokenResponseData } from './dto/refresh.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(dto: LoginDto): Promise<LoginResponseData> {
    const { username, password } = dto;

    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      this.logger.warn(`Failed login attempt for username: ${username}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    const tokens = await this.generateTokens(user);

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        refreshToken: tokens.refreshToken,
        lastLogin: new Date(),
      },
    });

    this.logger.log(`User logged in: ${username}`);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }

  async logout(userId: number): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });

    this.logger.log(`User logged out: ${userId}`);
  }

  async refreshToken(refreshToken: string): Promise<RefreshTokenResponseData> {
    if (!refreshToken) {
      throw new UnauthorizedException('No refresh token provided');
    }

    const user = await this.prisma.user.findFirst({
      where: { refreshToken },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const tokens = await this.generateTokens(user);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: tokens.refreshToken },
    });

    this.logger.log(`Token refreshed for user: ${user.username}`);

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        lastLogin: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }

  private async generateTokens(user: { id: number; username: string }): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const jwtSecret = this.configService.get<string>('JWT_SECRET') || 'default-secret';
    const jwtRefreshSecret = this.configService.get<string>('JWT_REFRESH_SECRET') || 'default-refresh-secret';

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { userId: user.id, username: user.username },
        { secret: jwtSecret, expiresIn: '7d' },
      ),
      this.jwtService.signAsync(
        { userId: user.id },
        { secret: jwtRefreshSecret, expiresIn: '30d' },
      ),
    ]);

    return { accessToken, refreshToken };
  }
}
