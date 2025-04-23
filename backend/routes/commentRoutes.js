import express from 'express';
import multer from 'multer';
import path from 'path';
import { createComment, getComments } from '../controllers/commentController.js';

const router = express.Router();

// Image upload config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// POST /api/comments
router.post('/', upload.single('image'), createComment);

// GET /api/comments
router.get('/', getComments);

export default router;
