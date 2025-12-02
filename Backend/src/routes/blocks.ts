import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import * as blockController from '../controllers/blockController';
import { authenticate } from '../middleware/auth';

const router = Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|svg|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Public routes
router.post('/list', blockController.getAllBlocks); // POST for pagination
router.get('/:slug', blockController.getBlockBySlug);

// Admin routes (protected)
router.post('/admin/list', authenticate, blockController.getAdminBlocks); // POST for pagination
router.get('/admin/:id', authenticate, blockController.getBlockById);
router.post('/', authenticate, upload.single('icon'), blockController.createBlock);
router.put('/:id', authenticate, upload.single('icon'), blockController.updateBlock);
router.patch('/:id/archive', authenticate, blockController.archiveBlock);
router.patch('/:id/unarchive', authenticate, blockController.unarchiveBlock);
router.delete('/:id', authenticate, blockController.deleteBlock);

export default router;
