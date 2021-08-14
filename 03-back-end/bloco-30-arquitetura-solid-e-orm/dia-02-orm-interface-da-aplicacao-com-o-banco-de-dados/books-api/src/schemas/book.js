const joi = require('joi');

const bookSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  pageQuantity: joi.number(),
});

const bookUpdateSchema = bookSchema.fork(
  ['title', 'author'],
  (schema) => schema.optional(),
);

module.exports = {
  bookSchema,
  bookUpdateSchema,
};
