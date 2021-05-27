const joi = require('joi');

module.exports = joi
  .string()
  .pattern(/^\w{12}$/)
  .required();
