import { Injectable, NotFoundException, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Status } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginationDto } from '../common/dto/response.dto';
import { ListQueryDto } from '../common/dto/pagination.dto';
import slugify from 'slugify';

interface PostWithRelations {
  id: number;
  title: string;
  slug: string;
  summaryDescription: string;
  fullDescription: string | null;
  iconPath: string | null;
  url: string | null;
  status: Status;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);

  constructor(private prisma: PrismaService) {}

  async findAllPublic(query: ListQueryDto): Promise<{ data: PostWithRelations[]; pagination: PaginationDto }> {
    const { page = 1, pageSize = 10, status, search, sortBy = 'createdAt', sortOrder = 'desc' } = query;
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where: Record<string, unknown> = {
      isArchived: false,
    };

    if (status && status !== 'ALL') {
      where.status = status;
    }

    if (search && search.trim()) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' as const } },
        { summaryDescription: { contains: searchTerm, mode: 'insensitive' as const } },
      ];
    }

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.post.count({ where }),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    this.logger.log(`Fetched ${posts.length} posts (page ${page})`);

    return {
      data: posts as PostWithRelations[],
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  }

  async findBySlug(slug: string): Promise<PostWithRelations> {
    const post = await this.prisma.post.findFirst({
      where: {
        slug,
        isArchived: false,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post as PostWithRelations;
  }

  async findById(id: number): Promise<PostWithRelations> {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return post as PostWithRelations;
  }

  async findAllAdmin(query: ListQueryDto): Promise<{ data: PostWithRelations[]; pagination: PaginationDto }> {
    const {
      page = 1,
      pageSize = 20,
      status,
      includeArchived = false,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = query;
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const where: Record<string, unknown> = {};

    if (status && status !== 'ALL') {
      where.status = status;
    }

    if (!includeArchived) {
      where.isArchived = false;
    }

    if (search && search.trim()) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' as const } },
        { summaryDescription: { contains: searchTerm, mode: 'insensitive' as const } },
      ];
    }

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder },
      }),
      this.prisma.post.count({ where }),
    ]);

    const totalPages = Math.ceil(total / pageSize);

    this.logger.log(`Admin fetched ${posts.length} posts (page ${page})`);

    return {
      data: posts as PostWithRelations[],
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    };
  }

  async create(dto: CreatePostDto, iconPath: string | null): Promise<PostWithRelations> {
    const { title, summaryDescription, fullDescription, url, status } = dto;

    if (!title || !summaryDescription) {
      throw new BadRequestException('Title and summary description are required');
    }

    const slug = slugify(title, { lower: true, strict: true });

    const existingPost = await this.prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      throw new BadRequestException('A post with this title already exists');
    }

    const post = await this.prisma.post.create({
      data: {
        title,
        slug,
        summaryDescription,
        fullDescription,
        iconPath,
        url,
        status: status || 'PENDING',
      },
    });

    this.logger.log(`Created post: ${post.slug}`);

    return post as PostWithRelations;
  }

  async update(id: number, dto: UpdatePostDto, iconPath: string | null): Promise<PostWithRelations> {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException('Post not found');
    }

    const updateData: Record<string, unknown> = {
      ...(dto.summaryDescription && { summaryDescription: dto.summaryDescription }),
      ...(dto.fullDescription !== undefined && { fullDescription: dto.fullDescription }),
      ...(dto.url !== undefined && { url: dto.url }),
      ...(dto.status && { status: dto.status }),
    };

    if (dto.title && dto.title !== existingPost.title) {
      const newSlug = slugify(dto.title, { lower: true, strict: true });

      // Check for duplicate slug (excluding current post)
      const conflictingPost = await this.prisma.post.findFirst({
        where: {
          slug: newSlug,
          id: { not: id },
        },
      });

      if (conflictingPost) {
        throw new BadRequestException('A post with this title already exists');
      }

      updateData.title = dto.title;
      updateData.slug = newSlug;
    }

    if (iconPath) {
      updateData.iconPath = iconPath;
    }

    const post = await this.prisma.post.update({
      where: { id },
      data: updateData,
    });

    this.logger.log(`Updated post: ${post.slug}`);

    return post as PostWithRelations;
  }

  async archive(id: number): Promise<PostWithRelations> {
    const post = await this.prisma.post.update({
      where: { id },
      data: { isArchived: true },
    });

    this.logger.log(`Archived post: ${post.slug}`);

    return post as PostWithRelations;
  }

  async unarchive(id: number): Promise<PostWithRelations> {
    const post = await this.prisma.post.update({
      where: { id },
      data: { isArchived: false },
    });

    this.logger.log(`Unarchived post: ${post.slug}`);

    return post as PostWithRelations;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: { id },
    });

    this.logger.log(`Deleted post ID: ${id}`);
  }
}
