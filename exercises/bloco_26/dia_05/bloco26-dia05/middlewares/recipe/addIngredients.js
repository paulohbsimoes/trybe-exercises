const rescue = require('express-rescue');
const { getRecipes, setRecipes } = require('../../utils/fsRecipes');

module.exports = rescue(async (req, res, next) => {
  const { insert } = req.body;

  if(!insert) return res.status(200).end();

  const recipes = await getRecipes();
  const { id } = req.params;
  const newRecipes = recipes.map(recipe => {
    if(recipe.id === Number(id)) {
      return {
        ...recipe,
        ingredientes: [...recipe.ingredientes, ...insert],
      }
    };
    return recipe;
  });

  await setRecipes(newRecipes);

  return res.status(200).end();
});
