const { MongoClient } = require('mongodb');

const URI = 'mongodb://127.0.0.1:27017';

let db = null;

const connect = async () => {
  if (db) return db;

  const conn = await MongoClient.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  db = conn.db('rest_exercicios');

  return db;
}

module.exports = connect;
