import express from 'express';
import {
  getAllTech,
  getTechById,
  getTechBySlug,
  createTech,
  updateTech,
  deleteTech,
} from '../controllers/techController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllTech);
router.get('/:id', getTechById);
router.get('/slug/:slug', getTechBySlug);
router.post('/', protect, admin, createTech);
router.put('/:id', protect, admin, updateTech);
router.delete('/:id', protect, admin, deleteTech);

export default router;
