const connect = require('./connection');

const create = async (username, password) => connect()
  .then((db) => db.collection('users').insertOne({ username, password }))
  .then(result => result.ops[0].username);

const getByUsername = async (username) => connect()
  .then((db) => db.collection('users').findOne({ username }));

module.exports = {
  create,
  getByUsername
};
