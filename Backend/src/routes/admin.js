const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const slugify = require('slugify');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { authController } = require('../controllers');
const { isAuthenticated } = require('../middleware/auth');
// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only image files are allowed!'));
    }
});

// Auth routes
router.get('/login', (req, res) => {
    res.render('admin/auth/login', { 
        layout: false,
        error: req.query.error 
    });
});
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Protected admin routes
router.use(isAuthenticated);

// Block management routes
router.get('/blocks', async (req, res) => {
    try {
        const blocks = await prisma.block.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.render('admin/blocks/index', { blocks, title: 'Manage Projects' });
    } catch (error) {
        res.status(500).render('error', { message: 'Error loading projects' });
    }
});

router.post('/blocks', upload.single('icon'), async (req, res) => {
    try {
        const { title, summaryDescription, fullDescription, status, url } = req.body;
        
        // Validate required fields
        if (!title || !summaryDescription || !fullDescription) {
            throw new Error('Missing required fields');
        }
        
        const block = await prisma.block.create({
            data: {
                title,
                slug: slugify(title, { lower: true }),
                summaryDescription,
                fullDescription,
                status: status || 'PUBLISHED',
                url,
                iconPath: req.file ? `/uploads/${req.file.filename}` : null
            }
        });
        res.redirect('/admin/blocks');
    } catch (error) {
        console.error('Error creating block:', error);
        
        let errorMessage = 'Error creating tool';
        if (error.message === 'Missing required fields') {
            errorMessage = 'Please fill in all required fields';
        } else if (error.code === 'P2002') {
            errorMessage = 'A tool with this title already exists';
        }
        
        // Render the admin page with error message
        const blocks = await prisma.block.findMany({
            orderBy: { createdAt: 'desc' }
        });
        
        res.render('admin/blocks/index', { 
            blocks, 
            title: 'Manage Projects',
            message: errorMessage,
            messageType: 'error'
        });
    }
});

router.put('/blocks/:id', upload.single('icon'), async (req, res) => {
    try {
        const { id } = req.params;
        const { title, summaryDescription, fullDescription, status, url } = req.body;
        
        const updateData = {
            title,
            slug: slugify(title, { lower: true }),
            summaryDescription,
            fullDescription,
            status,
            url,
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
        console.error('Error updating tool:', error); // Debug log
        res.status(500).render('error', { message: 'Error updating tool' });
    }
});

router.delete('/blocks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.block.delete({
            where: { id: parseInt(id) }
        });
        res.redirect('/admin/blocks');
    } catch (error) {
        res.status(500).render('error', { message: 'Error deleting tool' });
    }
});

router.patch('/blocks/:id/archive', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.block.update({
            where: { id: parseInt(id) },
            data: { isArchived: true }
        });
        res.redirect('/admin/blocks');
    } catch (error) {
        res.status(500).render('error', { message: 'Error archiving tool' });
    }
});

router.get('/blocks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const block = await prisma.block.findUnique({
            where: { id: parseInt(id) }
        });
        if (!block) {
            return res.status(404).json({ message: 'Tool not found' });
        }
        res.json(block);
    } catch (error) {
        console.error('Error fetching tool:', error);
        res.status(500).json({ message: 'Error loading tool' });
    }
});

module.exports = router; 