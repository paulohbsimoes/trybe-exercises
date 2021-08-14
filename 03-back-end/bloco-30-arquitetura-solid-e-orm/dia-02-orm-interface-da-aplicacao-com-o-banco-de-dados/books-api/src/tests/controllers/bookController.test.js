const chai = require('chai');
const chaiHttp = require('chai-http');
const { stub } = require('sinon')
const { describe, it } = require('mocha');
const { expect } = require('chai');
const { Book } = require('../../database/models');
const app = require('../../api/app');
const { bookSchema, bookUpdateSchema } = require('../../schemas/book');

chai.use(chaiHttp);

const book = () => ({
  id: 1,
  title: "Title 1",
  author: "Author 1",
  pageQuantity: 100,
  createdAt: "2021-08-11T22:25:27.000Z",
  updatedAt: "2021-08-11T22:25:27.000Z"
});

describe('Its possible to get all the books at GET /books', () => {
  describe('When there is books', () => {
    let response, findAllStub;
  
    before(async () => {
      findAllStub = stub(Book, 'findAll').resolves([ book() ]);

      response = await chai.request(app).get('/books');
    });
  
    after(() => findAllStub.restore())
  
    it('should have status 200', () => {
      expect(response).to.have.status(200);
    });
  
    it('should return an array of books', () => {
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.not.empty;
    });
  });

  describe('When there is no books', () => {
    let response, findAllStub;
  
    before(async () => {
      findAllStub = stub(Book, 'findAll').resolves([]);
      response = await chai.request(app).get('/books');
    });
  
    after(() => {
      findAllStub.restore();
    });
  
    it('should have status 200', () => {
      expect(response).to.have.status(200);
    });
  
    it('should return an empty array', () => {
      expect(response.body).to.be.an('array');
      expect(response.body).to.be.empty;
    });
  });
});

describe('Its possible to get the books by id at GET /books/:id', () => {
  describe('When the book is found', () => {
    let response, findOne;
  
    before(async () => {
      findOne = stub(Book, 'findOne').resolves(book());
      response = await chai.request(app).get('/books/1');
    });
  
    after(() => {
      findOne.restore();
    });
  
    it('should have status 200', () => {
      expect(response).to.have.status(200);
    });
  
    it('should return an empty array', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys([
        'id', 'title', 'author', 'pageQuantity', 'createdAt', 'updatedAt'
      ]);
    });
  });

  describe('When the book is not found', () => {
    let response, findOne;
  
    before(async () => {
      findOne = stub(Book, 'findOne').resolves(null);
      response = await chai.request(app).get('/books/1');
    });
  
    after(() => {
      findOne.restore();
    });
  
    it('should have status 404', () => {
      expect(response).to.have.status(404);
    });
  
    it('should return a object', () => {
      expect(response.body).to.be.an('object');
    });

    it('the object should have a property message', () => {
      expect(response.body).to.have.property('message');
    });

    it('the message should be "Book not found"', () => {
      expect(response.body.message).to.equal('Book not found');
    });
  });
});

describe('Its possible to create books at POST /books', () => {
  describe('When the book is created successfully', () => {
    let response, create;

    before(async () => {
      create = stub(Book, 'create').resolves(Book.build({
        title: "Title 1",
        author: "Author 1",
        pageQuantity: 100,
      }));

      response = await chai.request(app)
        .post('/books')
        .send({
          title: "Title 1",
          author: "Author 1",
          pageQuantity: 100,
        });
    });

    after(() => {
      create.restore();
    });

    it('should have status 201', () => {
      expect(response).to.have.status(201);
    });

    it('should return a object', () => {
      expect(response.body).to.be.a("object");
    });
  });

  describe('When the bookData is invalid', () => {
    let response, mockBookSchema;

    before(async () => {
      mockBookSchema = stub(bookSchema, 'validate')
        .returns({ error: { isJoi: true, details: [ { message: 'Wrong data' } ] } });

      response = await chai.request(app)
        .post('/books')
        .send({
          invalid: 'data'
        });
    });

    after(() => {
      mockBookSchema.restore();
    });

    it('should have status 400', () => {
      expect(response).to.have.status(400);
    });

    it('should return a object', () => {
      expect(response.body).to.be.a("object");
    });

    it('should have a message property', () => {
      expect(response.body).to.have.property("message");
    });

    it('should have the joi message', () => {
      expect(response.body.message).to.equal("Wrong data");
    });
  });
});

describe('Its possible to update books using PUT /books/:id', () => {
  describe('When the book is updated', () => {
    let response, update, findOne;
  
    before(async () => {
      update = stub(Book, 'update');
      findOne = stub(Book, 'findOne').resolves({ ...book(), title: 'Another title' });

      response = await chai.request(app)  
        .put('/books/1')
        .send({
          title: 'Another title'
        });
    });
  
    after(() => {
      update.restore();
      findOne.restore();
    });

    it('should call update with proper args', () => {
      expect(update.args[0][0]).to.deep.equal({ title: 'Another title' });
      expect(update.args[0][1]).to.deep.equal({ where: { id: "1" } });
    });
  
    it('should have status 200', () => {
      expect(response).to.have.status(200);
    });
  
    it('should return a object', () => {
      expect(response.body).to.be.an('object');
    });
  });

  describe('When the update fail', () => {
    let response, findOne, mockSchema;
  
    before(async () => {
      findOne = stub(Book, 'findOne').resolves({ ...book(), title: 'Another title' });

      mockSchema = stub(bookUpdateSchema, 'validate')
        .returns({ error: { isJoi: true, details: [ { message: 'Wrong data' } ] } })

      response = await chai.request(app)  
        .put('/books/1')
        .send({
          invalid: 'data'
        });
    });
  
    after(() => {
      findOne.restore();
      mockSchema.restore();
    });
  
    it('should have status 200', () => {
      expect(response).to.have.status(400);
    });
  
    it('should return a object', () => {
      expect(response.body).to.be.an('object');
    });

    it('should have the property message', () => {
      expect(response.body).to.have.property('message');
    });
    
    it('should use the joi message', () => {
      expect(response.body.message).to.equal('Wrong data');
    });
  });
})
