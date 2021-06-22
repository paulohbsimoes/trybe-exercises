const fs = require('fs/promises');
const readline = require('readline-sync');

const getFileContent = async (filepath) => {
  try {
    const result = await fs.readFile(filepath, 'utf-8');
    return result;
  } catch (error) {
    if (error.message.includes('no such file or directory')) {
      console.log('Arquivo inexistente');
    } else {
      console.log(error.message);
    };
  }
  return null;
}

const showFileContent = async (filepath) => {
  const fileContent = await getFileContent(filepath);
  if (fileContent) console.log(fileContent);
}

(async () => {
  try {
    const filepath = readline.question('Type the path of the file: ');
    await showFileContent(filepath);
  } catch (error) {
    console.log(error.message);
  }
})();
