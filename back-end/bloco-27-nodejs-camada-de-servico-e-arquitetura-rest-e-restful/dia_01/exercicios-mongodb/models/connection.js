require('dotenv').config();
const { MongoClient } = require('mongodb');

const URL = "mongodb://127.0.0.1:27017";

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

let db = null;

const connect = async () => {
  if (db) return db;
  const conn = await MongoClient.connect(URL, OPTIONS);
  db = conn.db('users_crud');
  return db;
}

module.exports = connect;
