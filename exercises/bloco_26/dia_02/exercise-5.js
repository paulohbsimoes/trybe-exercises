const fs = require('fs/promises');
const { exec } = require('child_process');
const util = require('util');

const execPromise = util.promisify(exec);

const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function stringToFiles() {
  strings.forEach(async (string, index) => {
    fs.writeFile(`file${index + 1}.txt`, string);
  })
}

async function joinFiles() {
  try {
    const { stdout: files } = await execPromise('ls file*');
    let filenames = files.split('\n');
    filenames.splice(-1);
    const fileContents = filenames.map((filename) => {
      return fs.readFile(filename, 'utf-8');
    })
    const result = (await Promise.all(fileContents)).join(' ');
    await fs.writeFile('fileAll.txt', result);
  } catch (error) {
    console.log(error.message);
  }
}

(async () => {
  await stringToFiles();
  await joinFiles();
})();
