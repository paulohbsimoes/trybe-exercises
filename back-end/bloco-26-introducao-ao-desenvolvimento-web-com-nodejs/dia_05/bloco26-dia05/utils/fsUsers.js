const path = require('path');
const { getFileContent, setFileContent } = require('./fs');

const USERS_FILE_PATH = path.resolve(__dirname, '..', 'data', 'users.json');

const getUsers = async () => await getFileContent(USERS_FILE_PATH);

const setUsers = async (newUsers) => await setFileContent(USERS_FILE_PATH, newUsers);

module.exports = {
  getUsers,
  setUsers
}
