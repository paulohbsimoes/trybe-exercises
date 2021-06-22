require('dotenv').config();
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: 'localhost',
  database: 'users_crud'
});
