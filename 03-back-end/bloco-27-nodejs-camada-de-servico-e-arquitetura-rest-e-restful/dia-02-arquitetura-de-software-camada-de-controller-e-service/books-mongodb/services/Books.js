const BookModel = require('../models/Book');
const AuthorModel = require('../models/Author');
const BookSchema = require('../schema/Book');

const getAll = async () => BookModel.getAll();

const getByAuthorId = async (authorId) => BookModel.getByAuthorId(authorId);

const getById = async (bookId) => BookModel.getById(bookId);

const create = async ({ authorId, title }) => {
  const validationError = BookSchema({ authorId, title });

  if (validationError) return validationError;

  const author = await AuthorModel.getByAuthorId(authorId);

  if (!author) return {
    err: {
      code: 'invalid_author',
      message: 'Não existem nenhuma autor com o id informado.'
    }
  }
  
  return BookModel.create({ authorId, title });
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  create
}
