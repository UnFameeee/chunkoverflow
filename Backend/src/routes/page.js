const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// API Routes for frontend
router.get('/api/blocks', async (req, res) => {
    try {
        const blocks = await prisma.block.findMany({
            orderBy: { createdAt: 'desc' }
        });

        res.json({ success: true, data: blocks });
    } catch (error) {
        console.error('Error loading blocks:', error);
        res.status(500).json({ success: false, message: 'Error loading tools' });
    }
});

router.get('/api/blocks/:slug', async (req, res) => {
    try {
        const block = await prisma.block.findUnique({
            where: { slug: req.params.slug }
        });

        if (!block) {
            return res.status(404).json({ success: false, message: 'Tool not found' });
        }

        res.json({ success: true, data: block });
    } catch (error) {
        console.error('Error loading block:', error);
        res.status(500).json({ success: false, message: 'Error loading tool' });
    }
});

// Keep EJS routes for admin panel (if needed)
router.get('/', async (req, res) => {
    try {
        const blocks = await prisma.block.findMany({
            orderBy: { createdAt: 'desc' }
        });

        res.render('index', { blocks });
    } catch (error) {
        console.error('Error loading blocks:', error);
        res.status(500).render('error', { message: 'Error loading tools' });
    }
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

router.get('/privacy', (req, res) => {
    res.render('privacy', { title: 'Privacy Policy' });
});

router.get('/blocks/:slug', async (req, res) => {
    try {
        const block = await prisma.block.findUnique({
            where: { slug: req.params.slug }
        });

        if (!block) {
            return res.status(404).render('error', { message: 'Tool not found' });
        }

        res.render('blocks/detail', { block });
    } catch (error) {
        res.status(500).render('error', { message: 'Error loading tool' });
    }
});

module.exports = router;