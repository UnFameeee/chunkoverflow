const express = require('express');
const router = express.Router();
const adminRoutes = require('./admin');
const blockRoutes = require('./block');
const pageRoutes = require('./page');

// Public routes
router.use('/', pageRoutes);
router.use('/blocks', blockRoutes);

// Admin routes
router.use('/admin', adminRoutes);

// 404 handler
router.use('*', (req, res) => {
    res.status(404).render('error', { message: 'Page not found' });
});

module.exports = router; 