const { MongoClient } = require('mongodb');

const URI = 'mongodb://127.0.0.1:27017';

let db = null;
let conn = null

const connection = async () => {
  if (db) return db;
  try {
    conn = await MongoClient.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    db = conn.db('plants_api');
    return db;
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
}

const close = () => {
  if (conn) {
    conn.close();
    db = null;
    conn = null;
  }
}

module.exports = {
  connection,
  close
};
