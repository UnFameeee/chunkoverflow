const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Static pages
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

// Block detail page
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
module.exports = router; 