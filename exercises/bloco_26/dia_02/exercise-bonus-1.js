const fs = require('fs/promises');
const readline = require('readline-sync');

const showFileContent = async (filename) => {
  const fileContent = await fs.readFile(filename, 'utf-8');
  console.log(fileContent);
}

(async () => {
  try {
    const filepath = readline.question('Type the path of the file: ');
    await showFileContent(filepath, 'utf-8');
  } catch (error) {
    if (error.message.includes('no such file or directory')) {
      console.log('Arquivo inexistente');
    } else {
      console.log(error.message);
    };
  }
})();
