import pool from '../config/db.js';

const Comment = {
  getAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM comments ORDER BY timestamp DESC');
    return rows;
  },

  create: async (username, comment) => {
    const [result] = await pool.execute('INSERT INTO comments (username, comment) VALUES (?, ?)', [username, comment]);
    return result.insertId;
  },

  findById: async (id) => {
    const [rows] = await pool.execute('SELECT * FROM comments WHERE id = ?', [id]);
    return rows[0];
  },
};

export default Comment;
