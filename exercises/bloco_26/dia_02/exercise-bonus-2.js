const readline = require('readline-sync');
const fs = require('fs/promises');

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

(async () => {
  try {
    const filepath = readline.question('Qual arquivo deseja utilizar? ');
    const content = await getFileContent(filepath);
    if (!content) return;
    const word = readline.question('Qual a palavra a ser substituida? ');
    const newWord = readline.question('Qual a nova palavra? ');
    const result = content.replace(word, newWord);
    console.log(result);
    const destFilePath = readline.question('Qual o arquivo de destino? ');
    fs.writeFile(destFilePath, result);
  } catch (error) {
    console.log(error.message);
  }
})();
