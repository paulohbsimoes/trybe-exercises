require('dotenv').config();

const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = async () => {
  if (!db) {
    const conn = await MongoClient.connect(MONGODB_URL, OPTIONS);
    db = conn.db('model_example');
  }
  return Promise.resolve(db);
}

module.exports = connection;
