const { getRecipes, setRecipes } = require('../../utils/fsRecipes');
const rescue = require('express-rescue');
const boom = require('@hapi/boom');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const recipes = await getRecipes();
  const recipeToDelete = recipes.find((recipe) => recipe.id === Number(id));
  if (!recipeToDelete) throw boom.notFound('recipe not found');
  const newRecipes = recipes.filter((recipe) => recipe != recipeToDelete);
  await setRecipes(newRecipes)
  res.status(200).json(recipeToDelete);
});
