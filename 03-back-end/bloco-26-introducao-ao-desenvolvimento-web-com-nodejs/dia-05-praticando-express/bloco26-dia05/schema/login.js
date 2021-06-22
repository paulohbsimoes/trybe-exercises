const joi = require('joi');

module.exports = joi.object({
  email: joi
    .string()
    .email()
    .message('O email deve estar no formato email@email.com')
    .required(),
  password: joi
    .string()
    .pattern(/^\w{4,8}$/)
    .message('A senha deve ter no mínimo 4 e no máximo 8 caracteres.')
    .required()
})
  .messages({
    'any.required': 'O campo {#label} é necessário'
  })
