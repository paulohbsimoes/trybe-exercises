const joi = require('joi');

module.exports = joi.object({
  name: joi
    .string()
    .required(),
  ingredientes: joi
    .array()
    .items(joi.string())
    .required()
})
  .messages({
    'any.required': 'O campo {#label} é obrigatório.',
    'string.empty': 'O campo {#label} não pode está vazio.',
  });
