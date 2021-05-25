const fs = require('fs/promises');

const getFileContent = async (filepath) => {
  const data = await fs.readFile(filepath, 'utf-8');
  const content = JSON.parse(data);
  return content;
}

const setFileContent = async (filepath, content) => {
  await fs.writeFile(filepath, JSON.stringify(content, null, 2));
}

module.exports = {
  getFileContent,
  setFileContent
}
