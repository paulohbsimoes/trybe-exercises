const joi = require('joi');

module.exports = joi.object({
  breed: joi.string(),
  needsSun: joi.boolean(),
  origin: joi.string(),
  size: joi.number(),
  specialCare: joi.object({
    waterFrequency: joi.number()
  })
});
