const sinon = require('sinon');
const { expect } = require('chai');
const { ObjectId } = require('mongodb');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getAll').resolves([]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    })

    after(() => {
      MoviesService.getAll.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

  });
});

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(false);
    })

    after(() => {
      MoviesService.create.restore();
    })

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'create')
        .resolves(true);
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('É possível buscar um filme pelo seu ID', () => {
  let request, response;

  beforeEach(() => {
    request = {};
    response = {};
    response.json = sinon.stub().returns();
    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();
  });

  describe('quando o filme é encontrado', () => {
    const payloadMovie = {
      _id: ObjectId(),
      title: 'Os três porquinhos',
      directedBy: 'Sr. anônimo',
      releaseYear: 1900
    }

    before(() => sinon.stub(MoviesService, 'getById').resolves(payloadMovie));

    after(() => MoviesService.getById.restore());

    beforeEach(() => {
      request.params = {
        id: payloadMovie._id
      }
    });

    it('usa o id recebido como param para buscar o filme', async () => {
      await MoviesController.getById(request, response);
      expect(MoviesService.getById.calledWith(request.params.id)).to.be.true;
    })

    it('res.json é chamado com o filme encontrado', async () => {
      await MoviesController.getById(request, response);
      expect(response.json.calledWith(payloadMovie)).to.be.true;
    })
  })

  describe('quando o filme não for encontrado', () => {
    before(() => sinon.stub(MoviesService, 'getById').resolves(null));

    after(() => MoviesService.getById.restore());

    beforeEach(() => request.params = { id: ObjectId() });

    it('chama status com o código 404', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.true;
    })

    it('chama send com com mensagem de Dados inválidos', async () => {
      await MoviesController.getById(request, response);
      expect(response.send.calledWith('Dados inválidos')).to.be.true;
    })
  })
})

describe.only('É possível remover um filme pelo seu ID', () => {
  let request, response;

  beforeEach(() => {
    request = {};
    response = {};
    response.json = sinon.stub().returns();
    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();
  });

  describe('quando o filme é removido com sucesso', () => {
    let movieId, payloadMovie;

    beforeEach(() => {
      movieId = ObjectId();

      request.params = { id: movieId };

      payloadMovie = {
        _id: movieId,
        title: 'Os três porquinhos',
        directedBy: 'Sr. anônimo',
        releaseYear: 1900
      }

      sinon.stub(MoviesService, 'remove').resolves(payloadMovie);
    })

    afterEach(() => MoviesService.remove.restore());

    it('usa o id recebido como parametro', async () => {
      await MoviesController.remove(request, response);
      expect(MoviesService.remove.calledWith(movieId)).to.be.true;
    })

    it('chama response.json com o filme removido', async () => {
      await MoviesController.remove(request, response);
      expect(response.json.calledWith(payloadMovie)).to.be.true;
    })
  })

  describe('quando a remoção falhar', () => {
    const errorMock = {
      err: {
        code: 'badRequest',
        message: 'Não foi possível remover o filme'
      }
    }

    before(() => sinon.stub(MoviesService, 'remove').resolves(errorMock));

    after(() => MoviesService.remove.restore());

    beforeEach(() => {
      request.params = { id: ObjectId() };
    });

    it('chama response.status com status 400', async () => {
      await MoviesController.remove(request, response);
      expect(response.status.calledWith(400)).to.be.true;
    })

    it('chama response.json com um objeto de error', async () => {
      await MoviesController.remove(request, response);
      expect(response.json.calledWith(errorMock)).to.be.true;
    })
  })
})
