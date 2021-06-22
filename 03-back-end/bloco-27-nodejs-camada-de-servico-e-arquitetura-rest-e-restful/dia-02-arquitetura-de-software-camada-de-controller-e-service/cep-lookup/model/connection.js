require('dotenv').config();
const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  database: 'cep_lookup',
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
});
