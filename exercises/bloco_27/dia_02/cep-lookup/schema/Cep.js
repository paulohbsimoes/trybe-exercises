const joi = require('joi');

const requiredString = joi.string().required();

module.exports = joi.object({
  cep: joi
    .string()
    .pattern(/^\d{5}-\d{3}$/)
    .message('CEP inválido')
    .required(),
  logradouro: requiredString,
  bairro: requiredString,
  localidade: requiredString,
  uf: requiredString
})
  .messages({
    'any.required': 'O campo {#label} é obrigatório'
  })
