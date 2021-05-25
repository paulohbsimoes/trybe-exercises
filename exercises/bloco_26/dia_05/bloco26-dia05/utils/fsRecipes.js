const path = require('path');
const { getFileContent, setFileContent } = require('./fs');

const RECIPES_FILE_PATH = path.resolve(__dirname, '..', 'data', 'recipes.json');

const getRecipes = async () => await getFileContent(RECIPES_FILE_PATH);

const setRecipes = async (newRecipes) => await setFileContent(RECIPES_FILE_PATH, newRecipes);

module.exports = {
  getRecipes,
  setRecipes
}
