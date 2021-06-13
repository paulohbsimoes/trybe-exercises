const connect = require('./connection');
const { ObjectId } = require('mongodb');

const registerUser = async (username, password) => connect()
  .then((db) => db.collection('users').insertOne({ username, password }))
  .then(result => result.ops[0].username );

const findUser = async (username) => connect()
  .then((db) => db.collection('users').findOne({ username }));

const getAll = () => connect().then((db) => db.collection('users').find().toArray());

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return connect().then((db) => db.collection('users').findOne(ObjectId(id)));
}

module.exports = {
  registerUser,
  findUser,
  getAll,
  getById
};
