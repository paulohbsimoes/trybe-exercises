require('dotenv').config();
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: 'rest_exercicios'
});
