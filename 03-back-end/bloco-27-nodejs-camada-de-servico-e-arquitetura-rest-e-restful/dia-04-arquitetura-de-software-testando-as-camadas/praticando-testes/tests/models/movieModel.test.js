const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { expect } = require('chai');
const { MongoMemoryServer } = require('mongodb-memory-server');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  // STUB NA UNHA :poop:
  // before(() => {
  //   const ID_EXAMPLE = '604cb554311d68f491ba5781';
  //   const connectionMock = {
  //     db: async () => ({
  //       collection: async () => ({
  //         insertOne: async () => ({
  //           insertedId: ID_EXAMPLE,
  //         })
  //       })
  //     })
  //   };

  //   sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  // });

  before(async () => {

    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    const connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);

  });

  // Restauraremos a função `connect` original após os testes.
  after(() => {
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});
