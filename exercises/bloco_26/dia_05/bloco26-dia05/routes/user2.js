const express = require('express');
const route = express.Router();
const rescue = require('express-rescue');
const joi = require('joi');
const boom = require('@hapi/boom');
const { getUsers2, setUsers2 } = require('../utils/fsUsers2');

const statusSchema = joi.object({
  status: joi
    .boolean()
    .strict()
    .required()
})
  .messages({
    'any.required': 'O campo {#label} é obrigatório',
    'boolean.base': 'status ins\'t a boolean'
  })
  
route.put('/:id', rescue(async (req, res, next) => {
  const { error } = statusSchema.validate(req.body);

  if (error) return next(error);

  const { id } = req.params;
  const users = await getUsers2();
  const userFound = users.some((user) => user.id === Number(id));
  if (!userFound) throw boom.notFound('user isn\'t found');

  const newUsers = users.map((user) => {
    if (user.id === Number(id)) {
      return {...user, isActive: req.body.status };
    }
    return user;
  })

  await setUsers2(newUsers);
  
  res.status(200).end();
}));

module.exports = route;
