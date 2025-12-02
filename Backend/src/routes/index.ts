import { Router } from 'express';
import authRoutes from './auth';
import blockRoutes from './blocks';

const router = Router();

router.use('/auth', authRoutes);
router.use('/blocks', blockRoutes);

export default router;
