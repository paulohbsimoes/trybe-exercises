const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'minhaSenha@123',
  database: 'mvc_example'
});

module.exports = connection;
