const express = require('express');
const router = express.Router();
const { blockController } = require('../controllers');

// Public block routes
router.get('/', blockController.getAllBlocks);
router.get('/:slug', blockController.getBlockBySlug);

module.exports = router; 