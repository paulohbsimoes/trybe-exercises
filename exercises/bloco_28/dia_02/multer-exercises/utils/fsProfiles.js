const fs = require('fs/promises');
const path = require('path');

const PROFILES_FILE_PATH = path.join(__dirname, '..', 'data', 'profiles.json');

const getProfiles = async () => {
  const result = await fs.readFile(PROFILES_FILE_PATH, 'utf-8');
  return JSON.parse(result);
}

const setProfiles = async (content) => fs.writeFile(
  PROFILES_FILE_PATH,
  JSON.stringify(content, null, 2)
);

module.exports = {
  getProfiles,
  setProfiles
}
