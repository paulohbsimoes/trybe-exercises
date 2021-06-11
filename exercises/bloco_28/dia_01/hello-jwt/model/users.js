const fsUsers = require('../utils/fsUsers');

const create = async ({ username, password, admin }) => {
  const users = await fsUsers.getUsers();
  users.push({ username, password, admin });
  await fsUsers.setUsers(users);
};

const getUsers = () => fsUsers.getUsers();

const getByUsername = async (username) => {
  const users = await getUsers();
  return users.find((user) => user.username === username);
};

module.exports = {
  create,
  getUsers,
  getByUsername,
};
