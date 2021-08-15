const { Book, Sequelize } = require('../database/models');
const { bookSchema, bookUpdateSchema } = require('../schemas/book');

const { Op } = Sequelize;

const getAll = async () => Book.findAll();

const getById = async (id) => Book.findOne({ where: { id } });

const getByAuthor = async (author) => Book.findAll({
  where: {
    author: {
      [Op.like]: `%${author}%`,
    },
  },
});

const create = async (bookData) => {
  const { error } = bookSchema.validate(bookData);
  if (error) throw error;
  return Book.create(bookData);
};

const update = async (id, bookData) => {
  const { error } = bookUpdateSchema.validate(bookData);
  if (error) throw error;
  return Book.update(bookData, { where: { id } });
};

const remove = async (id) => Book.destroy({ where: { id } });

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
};
