const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongodb = new MongoMemoryServer();
  const uri = await mongodb.getUri();

  return MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
