import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Public } from '../auth/public.decorator';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';
import { ResponseDto, PaginatedResponseDto } from '../common/dto/response.dto';

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Public()
  @Post('list')
  async findAllPublic(@Body() query: ListQueryDto) {
    const { data, pagination } = await this.postsService.findAllPublic(query);
    return PaginatedResponseDto.success(data, pagination);
  }

  @Public()
  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    const data = await this.postsService.findBySlug(slug);
    return ResponseDto.success(data);
  }

  @Post('admin/list')
  @UseGuards(JwtAuthGuard)
  async findAllAdmin(@Body() query: ListQueryDto) {
    const { data, pagination } = await this.postsService.findAllAdmin(query);
    return PaginatedResponseDto.success(data, pagination);
  }

  @Get('admin/:id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string) {
    const data = await this.postsService.findById(Number(id));
    return ResponseDto.success(data);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('icon'))
  async create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: MulterFile,
  ) {
    const iconPath = file ? `/uploads/${file.filename}` : null;
    const data = await this.postsService.create(createPostDto, iconPath);
    return ResponseDto.success(data);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('icon'))
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file: MulterFile,
  ) {
    const iconPath = file ? `/uploads/${file.filename}` : null;
    const data = await this.postsService.update(Number(id), updatePostDto, iconPath);
    return ResponseDto.success(data);
  }

  @Patch(':id/archive')
  @UseGuards(JwtAuthGuard)
  async archive(@Param('id') id: string) {
    const data = await this.postsService.archive(Number(id));
    return ResponseDto.success(data);
  }

  @Patch(':id/unarchive')
  @UseGuards(JwtAuthGuard)
  async unarchive(@Param('id') id: string) {
    const data = await this.postsService.unarchive(Number(id));
    return ResponseDto.success(data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    await this.postsService.delete(Number(id));
    return ResponseDto.success();
  }
}
