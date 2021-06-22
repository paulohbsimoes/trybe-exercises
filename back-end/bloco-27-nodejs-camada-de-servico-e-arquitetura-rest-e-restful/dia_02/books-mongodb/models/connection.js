require('dotenv').config();

const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = async () => {
  if (db) return db;

  const conn = await MongoClient.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  db = conn.db('model_example');

  return db;
}

module.exports = connection;
