const boom  = require('@hapi/boom');
const rescue = require('express-rescue');
const { getRecipes } = require('../../utils/fsRecipes')

module.exports = rescue(async (req, res, next) => {
  const { id } = req.params;
  const recipes = await getRecipes();

  const foundId = recipes.some(recipe => recipe.id === Number(id));
  if(!foundId) throw boom.notFound('recipe not found');
  
  const { remove, insert } = req.body;
  if(!remove && !insert) throw boom.badRequest('Deve receber uma requisição com os campos remove e/ou insert.');

  next();
});
