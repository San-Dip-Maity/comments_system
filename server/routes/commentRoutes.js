import express from 'express';
import { getComments, postComment } from '../controllers/commentsController.js';

const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', postComment);

export default router;
