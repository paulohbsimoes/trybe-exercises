const tokenSchema = require('../schema/token');
const boom = require('@hapi/boom');
const rescue = require('express-rescue');

module.exports = rescue((req, _res, next) => {
  const { authorization: token } = req.headers;
  
  if(!token) throw boom.badRequest('Deverá haver um token');
  
  const { error } = tokenSchema.validate(token);

  if(error) throw boom.unauthorized('invalid token');
  
  next();
})
