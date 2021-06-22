const rescue = require('express-rescue');
const boom = require('@hapi/boom');
const { getRecipes, setRecipes } = require('../../utils/fsRecipes');

module.exports = rescue(async (req, res, next) => {
  const { remove } = req.body;
  
  if(!remove) return next();

  const recipes = await getRecipes();
  const { id } = req.params;
  const newRecipes = recipes.map(recipe => {
    if(recipe.id === Number(id)) {
      return {
        ...recipe,
        ingredientes: recipe.ingredientes
          .filter(ingrediente => !remove.includes(ingrediente)),
      }
    };
    return recipe;
  });

  await setRecipes(newRecipes);

  next();
});
