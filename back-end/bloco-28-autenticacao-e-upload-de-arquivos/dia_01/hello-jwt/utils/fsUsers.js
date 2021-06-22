const fs = require('fs/promises');
const path = require('path');

const USERS_FILE_PATH = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = async () => {
  const result = await fs.readFile(USERS_FILE_PATH, 'utf-8');
  return JSON.parse(result);
};

const setUsers = (content) => fs.writeFile(USERS_FILE_PATH, JSON.stringify(content, null, 2));

module.exports = {
  getUsers,
  setUsers,
};
