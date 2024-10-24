const express = require('express');
const router = express.Router();
const pool = require('../db/dbconfig.js');
const { v4: uuidv4 } = require('uuid'); 


router.post('/login', (req, res) => {
  const { username } = req.body;
  const sessionId = uuidv4();
  res.json({ sessionId });
});


router.get('/comments', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM comments ORDER BY timestamp DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/comments', async (req, res) => {
  const { username, comment } = req.body;

  try {
    const [result] = await pool.execute(
      'INSERT INTO comments (username, comment) VALUES (?, ?)',
      [username, comment]
    );

    const [newComment] = await pool.execute(
      'SELECT * FROM comments WHERE id = ?',
      [result.insertId]
    );


    const io = req.app.get('io');
    io.emit('newComment', newComment[0]);

    res.json(newComment[0]);
  } catch (error) {
    console.error('Error posting comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;