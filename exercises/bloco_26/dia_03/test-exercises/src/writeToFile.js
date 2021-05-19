const fs = require('fs/promises');

module.exports = async (...args) => {
  if (args.length !== 2) throw new Error('Número de argumentos inválido');
  const [filepath, content] = args;
  try {
    await fs.writeFile(filepath, content);
    return 'ok';
  } catch (error) {
    console.log(error.message);
  }
  return null;
};
