const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const slugify = require('slugify');

const blockController = {
    // Get all blocks for homepage
    getAllBlocks: async (req, res) => {
        try {
            const blocks = await prisma.block.findMany({
                where: {
                    isArchived: false,
                    status: 'PUBLISHED'
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });
            
            res.render('index', { blocks });
        } catch (error) {
            console.error('Error fetching blocks:', error);
            res.status(500).render('error', { 
                message: 'Error fetching blocks' 
            });
        }
    },

    // Get single block by slug
    getBlockBySlug: async (req, res) => {
        try {
            const block = await prisma.block.findUnique({
                where: {
                    slug: req.params.slug,
                    isArchived: false
                }
            });

            if (!block) {
                return res.status(404).render('error', { 
                    message: 'Block not found' 
                });
            }

            res.render('block/detail', { block });
        } catch (error) {
            console.error('Error fetching block:', error);
            res.status(500).render('error', { 
                message: 'Error fetching block details' 
            });
        }
    },

    // Admin Controllers
    getAdminBlocks: async (req, res) => {
        try {
            const blocks = await prisma.block.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            });
            
            res.render('admin/blocks/index', { blocks });
        } catch (error) {
            console.error('Error fetching blocks:', error);
            res.status(500).render('error', { 
                message: 'Error fetching blocks' 
            });
        }
    },

    createBlock: async (req, res) => {
        try {
            const { title, summaryDescription, fullDescription, status } = req.body;
            const iconPath = req.file ? `/uploads/${req.file.filename}` : null;

            const block = await prisma.block.create({
                data: {
                    title,
                    slug: slugify(title, { lower: true }),
                    summaryDescription,
                    fullDescription,
                    iconPath,
                    status
                }
            });

            res.redirect('/admin/blocks');
        } catch (error) {
            console.error('Error creating block:', error);
            res.status(500).render('error', { 
                message: 'Error creating block' 
            });
        }
    },

    updateBlock: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, summaryDescription, fullDescription, status } = req.body;
            const updateData = {
                title,
                slug: slugify(title, { lower: true }),
                summaryDescription,
                fullDescription,
                status
            };

            if (req.file) {
                updateData.iconPath = `/uploads/${req.file.filename}`;
            }

            await prisma.block.update({
                where: { id: parseInt(id) },
                data: updateData
            });

            res.redirect('/admin/blocks');
        } catch (error) {
            console.error('Error updating block:', error);
            res.status(500).render('error', { 
                message: 'Error updating block' 
            });
        }
    },

    archiveBlock: async (req, res) => {
        try {
            const { id } = req.params;
            await prisma.block.update({
                where: { id: parseInt(id) },
                data: { isArchived: true }
            });

            res.redirect('/admin/blocks');
        } catch (error) {
            console.error('Error archiving block:', error);
            res.status(500).render('error', { 
                message: 'Error archiving block' 
            });
        }
    },

    deleteBlock: async (req, res) => {
        try {
            const { id } = req.params;
            await prisma.block.delete({
                where: { id: parseInt(id) }
            });

            res.redirect('/admin/blocks');
        } catch (error) {
            console.error('Error deleting block:', error);
            res.status(500).render('error', { 
                message: 'Error deleting block' 
            });
        }
    }
};

module.exports = blockController; 