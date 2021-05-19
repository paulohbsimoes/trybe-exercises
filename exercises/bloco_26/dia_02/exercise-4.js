const fs = require('fs/promises');
const uuid = require('node-uuid');

const SIMPSONS = './simpsons.json';
const SIMPSONS_FAMILY = './simpsonFamily.json';

const readCharacters = async (filename) => {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    const characters = JSON.parse(data);
    return characters;
  } catch(error) {
    console.log(error.message)
    return null;
  }
}

const updateFile = async (filename, characters) => {
  try {
    await fs.writeFile(filename, JSON.stringify(characters, null, 2));
  } catch (error) {
    console.log(error.message);
  }
}

const printCharacters = async (filename) => {
  const characters = await readCharacters(filename);
  characters.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`)
  })
}

const getCharacterById = async (filename, id) => {
  const characters = await readCharacters(filename);
  const result = characters.find((character) => Number(character.id) === id);
  if (!result) throw new Error('id não encontrado');
  return result;
}

const removeCharacters = async (filename, ...ids) => {
  const characters = await readCharacters(filename);
  const newCharacters = characters.filter((character) => !ids.includes(Number(character.id)));
  await updateFile(SIMPSONS, newCharacters);
}

const createNewFileWithIds = async (source, destination, ...ids) => {
  const characters = await readCharacters(source);
  const newCharacters = characters
    .filter((character) => ids.includes(Number(character.id)));
  await updateFile(destination, newCharacters);
}

const createCharacter = (name) => ({
  id: uuid(),
  name
})

const addCharacter = async (filename, character) => {
  const characters = await readCharacters(filename);
  characters.push(character);
  updateFile(filename, characters);
}

const replaceCharacter = async (filename, characterName, newCharacter) => {
  const characters = await readCharacters(filename);
  const oldCharacter = characters.find((character) => character.name === characterName);
  const index = characters.indexOf(oldCharacter);
  characters[index] = newCharacter;
  updateFile(filename, characters);
}

(async () => {
  try {
    // 1
    await printCharacters(SIMPSONS);
    
    // 2
    const search = await getCharacterById(SIMPSONS, 4)
    console.log(search);

    // 3
    await removeCharacters(SIMPSONS, 10, 6);
    await printCharacters(SIMPSONS);

    // 4
    await createNewFileWithIds(SIMPSONS, SIMPSONS_FAMILY, 1, 2, 3, 4);
    await printCharacters(SIMPSONS_FAMILY);

    // 5
    const character = createCharacter('Nelson Muntz');
    await addCharacter(SIMPSONS_FAMILY, character);
    await printCharacters(SIMPSONS_FAMILY);

    // 6
    const newCharacter = createCharacter('Maggie Simpson')
    await replaceCharacter(SIMPSONS_FAMILY, 'Nelson Muntz', newCharacter);
    await printCharacters(SIMPSONS_FAMILY);
  } catch (error) {
    console.log(error.message);
  }
})();

