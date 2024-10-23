import Comment from '../models/Comment.js';

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.getAll();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const postComment = async (req, res) => {
  const { username, comment } = req.body;
  
  try {
    const newCommentId = await Comment.create(username, comment);
    const newComment = await Comment.findById(newCommentId);
    
    res.json(newComment);
  } catch (error) {
    console.error('Error posting comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

