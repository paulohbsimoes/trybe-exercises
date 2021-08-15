const { describe } = require('mocha')
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

const BookModel = require('../../database/models/book')

describe('The book model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  checkModelName(Book)('Book');

  context('should have properties title, author and pageQuantity', () => {
    ['title', 'author', 'pageQuantity'].forEach(checkPropertyExists(book));
  });
});
