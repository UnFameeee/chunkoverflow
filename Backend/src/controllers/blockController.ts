import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import slugify from 'slugify';
import { Status } from '@prisma/client';

interface PaginationPayload {
  page?: number;
  pageSize?: number;
  status?: Status | 'ALL';
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export const getAllBlocks = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      pageSize = 10,
      status,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    }: PaginationPayload = req.body;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Build where clause
    const where: any = {
      isArchived: false
    };

    // Add status filter
    if (status && status !== 'ALL') {
      where.status = status;
    }
    // If status is 'ALL' or not provided, don't filter by status

    // Add search filter
    if (search && search.trim()) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { summaryDescription: { contains: searchTerm, mode: 'insensitive' } }
      ];
    }

    const [blocks, total] = await Promise.all([
      prisma.block.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder }
      }),
      prisma.block.count({ where })
    ]);

    const totalPages = Math.ceil(total / pageSize);

    res.json({
      success: true,
      data: blocks,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching blocks:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blocks'
    });
  }
};

export const getBlockBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const block = await prisma.block.findFirst({
      where: {
        slug,
        isArchived: false
      }
    });

    if (!block) {
      return res.status(404).json({
        success: false,
        message: 'Block not found'
      });
    }

    res.json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error fetching block:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching block details'
    });
  }
};

export const getBlockById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const block = await prisma.block.findUnique({
      where: {
        id: Number(id)
      }
    });

    if (!block) {
      return res.status(404).json({
        success: false,
        message: 'Block not found'
      });
    }

    res.json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error fetching block:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching block details'
    });
  }
};

interface AdminPaginationPayload extends PaginationPayload {
  includeArchived?: boolean;
}

export const getAdminBlocks = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      pageSize = 20,
      status,
      includeArchived = false,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    }: AdminPaginationPayload = req.body;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Build where clause
    const where: any = {};

    // Add status filter
    if (status && status !== 'ALL') {
      where.status = status;
    }

    // Add archive filter
    if (!includeArchived) {
      where.isArchived = false;
    }

    // Add search filter
    if (search && search.trim()) {
      const searchTerm = search.trim();
      where.OR = [
        { title: { contains: searchTerm, mode: 'insensitive' } },
        { summaryDescription: { contains: searchTerm, mode: 'insensitive' } }
      ];
    }

    const [blocks, total] = await Promise.all([
      prisma.block.findMany({
        where,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder }
      }),
      prisma.block.count({ where })
    ]);

    const totalPages = Math.ceil(total / pageSize);

    res.json({
      success: true,
      data: blocks,
      pagination: {
        page,
        pageSize,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    console.error('Error fetching admin blocks:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blocks'
    });
  }
};

export const createBlock = async (req: Request, res: Response) => {
  try {
    const { title, summaryDescription, fullDescription, url, status } = req.body;
    const iconPath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !summaryDescription) {
      return res.status(400).json({
        success: false,
        message: 'Title and summary description are required'
      });
    }

    const slug = slugify(title, { lower: true, strict: true });

    const existingBlock = await prisma.block.findUnique({
      where: { slug }
    });

    if (existingBlock) {
      return res.status(400).json({
        success: false,
        message: 'A block with this title already exists'
      });
    }

    const block = await prisma.block.create({
      data: {
        title,
        slug,
        summaryDescription,
        fullDescription,
        iconPath,
        url,
        status: (status as Status) || 'PENDING'
      }
    });

    res.status(201).json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error creating block:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating block'
    });
  }
};

export const updateBlock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, summaryDescription, fullDescription, url, status } = req.body;

    const existingBlock = await prisma.block.findUnique({
      where: { id: parseInt(id) }
    });

    if (!existingBlock) {
      return res.status(404).json({
        success: false,
        message: 'Block not found'
      });
    }

    const updateData: any = {
      summaryDescription,
      fullDescription,
      url,
      status
    };

    if (title && title !== existingBlock.title) {
      updateData.title = title;
      updateData.slug = slugify(title, { lower: true, strict: true });
    }

    if (req.file) {
      updateData.iconPath = `/uploads/${req.file.filename}`;
    }

    const block = await prisma.block.update({
      where: { id: parseInt(id) },
      data: updateData
    });

    res.json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error updating block:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating block'
    });
  }
};

export const archiveBlock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const block = await prisma.block.update({
      where: { id: parseInt(id) },
      data: { isArchived: true }
    });

    res.json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error archiving block:', error);
    res.status(500).json({
      success: false,
      message: 'Error archiving block'
    });
  }
};

export const unarchiveBlock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const block = await prisma.block.update({
      where: { id: parseInt(id) },
      data: { isArchived: false }
    });

    res.json({
      success: true,
      data: block
    });
  } catch (error) {
    console.error('Error unarchiving block:', error);
    res.status(500).json({
      success: false,
      message: 'Error unarchiving block'
    });
  }
};

export const deleteBlock = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.block.delete({
      where: { id: parseInt(id) }
    });

    res.json({
      success: true,
      message: 'Block deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting block:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting block'
    });
  }
};
