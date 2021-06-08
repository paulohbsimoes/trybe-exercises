const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MoviesModel = require('../../models/movieModel');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient
        .connect(URLMock, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      const moviesCollection = await connectionMock.db('model_example').collection('movies');

      await moviesCollection.insertOne({
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      })
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

describe('Insere um novo filme no BD', () => {
  const DBServer = new MongoMemoryServer();
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();

    const connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    sinon.stub(MongoClient, 'connect')
    .resolves(connectionMock);

  });

  after(async () => {
    MongoClient.connect.restore();
    await DBServer.stop();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe.only('É possível recuperar um filme pelo seu ID', () => {
  let conn;

  before(async () => {
    const mongodb = new MongoMemoryServer();
    const uri = await mongodb.getUri();

    conn = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    sinon.stub(MongoClient, 'connect').resolves(conn);
  })

  after(() => MongoClient.connect.restore());

  describe('quando o filme é encontrado', () => {
    const payloadMovie = {
      title: 'Os três porquinhos',
      directedBy: 'Sr. anônimo',
      releaseYear: 1900
    }

    let payloadMovieId = null;

    before(async () => {
      const db = await conn.db('model_example');
      const { insertedId } = await db.collection('movies').insertOne({...payloadMovie });
      payloadMovieId = insertedId;
    })

    it('retorna um objeto', async () => {
      const result = await MoviesModel.getById(payloadMovieId);
      expect(result).to.be.a('object');
    })

    it('o objeto deve ser referente ao filme encontrado', async () => {
      const result = await MoviesModel.getById(payloadMovieId);
      expect(result).to.deep.equal({ _id: payloadMovieId, ...payloadMovie });
    })
  })

  describe('quando o ID é inválido', () => {
    it('retorna null', async () => {
      const result = await MoviesModel.getById('IDInválido');
      expect(result).to.be.null;
    })
  })

  describe('quando não há nenhum filme com o ID informado', () => {
    it('retorna null', async () => {
      const result = await MoviesModel.getById(ObjectId());
      expect(result).to.be.null;
    })
  })
})
