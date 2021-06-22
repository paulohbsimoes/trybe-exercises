const path = require('path');
const { getFileContent, setFileContent } = require('./fs');

const USERS2_FILE_PATH = path.resolve(__dirname, '..', 'data', 'users2.json');

const getUsers2 = async () => await getFileContent(USERS2_FILE_PATH);

const setUsers2 = async (newUsers2) => await setFileContent(USERS2_FILE_PATH, newUsers2);

module.exports = {
  getUsers2,
  setUsers2
}
