const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'sandip',
  database: 'comments_db'
});

module.exports = pool;