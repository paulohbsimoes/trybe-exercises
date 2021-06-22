const rescue = require('express-rescue');
const boom = require('@hapi/boom');
const recipeSchema = require('../../schema/recipe');
const { getRecipes, setRecipes} = require('../../utils/fsRecipes');

module.exports = rescue(async (req, res, next) => {
  const { error } = recipeSchema.validate(req.body, { abortEarly: false });

  if(error) return next(error);

  const { id } = req.params;
  const recipes = await getRecipes();

  const foundId = recipes.some(recipe => recipe.id === Number(id));
  if(!foundId) throw boom.notFound('recipe not found');

  const newRecipes = recipes.map(recipe => {
    if(recipe.id === Number(id)) return {
      ...recipe,
      ...req.body
    };
    return recipe;
  });

  await setRecipes(newRecipes);

  res.status(200).end();
});
