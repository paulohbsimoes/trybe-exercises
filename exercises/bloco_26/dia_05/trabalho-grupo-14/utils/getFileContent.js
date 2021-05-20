const fs = require('fs/promises');

module.exports = async (filepath) => {
  const data = await fs.readFile(filepath, 'utf-8');
  const content = JSON.parse(data);
  return content;
}
