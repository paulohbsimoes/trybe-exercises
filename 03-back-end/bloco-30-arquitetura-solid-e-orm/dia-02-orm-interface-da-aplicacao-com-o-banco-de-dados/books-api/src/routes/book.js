const bookRouter = require('express').Router();
const BookController = require('../controllers/book');

bookRouter.get('/', BookController.getAll);
bookRouter.get('/:id', BookController.getById);
bookRouter.post('/', BookController.create);
bookRouter.put('/:id', BookController.update);
bookRouter.delete('/:id', BookController.remove);

module.exports = bookRouter;
