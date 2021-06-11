const joi = require('joi');

module.exports = joi.object({
  username: joi.string().min(5).required(),
  password: joi.string().min(5).required(),
});
