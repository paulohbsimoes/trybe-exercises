const connection = require('./connection');
const { ObjectId } = require('mongodb');

const isValid = ({ firstName, lastName, email, password }) => {
  const errors = [];
  if (!firstName) errors.push('O campo "firstname" é obrigatório.');
  if (!lastName) errors.push('O campo "lastName" é obrigatório.');
  if (!email) errors.push('O campo "email" é obrigatório.');
  if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push('O "email" deve estar no formato email@email.com.');
  }
  if (!password) errors.push('O campo "password" é obrigatório.');
  if (password && password.length < 6) errors.push('O "password" deve ter no mínimo 6 caracteres.');
  return { error: errors.length ? errors : null };
}

const serialize = ({ _id, firstName, lastName, email, password }) => ({
  id: _id,
  firstName,
  lastName,
  email,
  password
})

const addUser = async (newUser) => {
  const db = await connection();
  const { insertedId } = await db.collection('users').insertOne({ ...newUser });
  return { id: insertedId, ...newUser };
}

const getUsers = async () => {
  const conn = await connection();
  const users = await conn.collection('users').find().toArray();
  return users.map(serialize);
}

const getUserById = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  const conn = await connection();
  const user = await conn.collection('users').findOne(ObjectId(id));
  return serialize(user);
}

const editUser = async (id, updatedUser) => {
  if (!ObjectId.isValid(id)) return null;
  const conn = await connection();
  const user = await getUserById(id);
  if (!user) return null;
  await conn.collection('users')
    .updateOne({ _id: ObjectId(id) }, { $set: updatedUser });
  return { id, ...updatedUser };
}

module.exports = {
  addUser,
  isValid,
  getUsers,
  getUserById,
  editUser
}
