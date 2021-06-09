const sinon = require('sinon');
const { expect } = require('chai');
const { ObjectId } = require('mongodb');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesService.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesService.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = '604cb554311d68f491ba5781';

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    })

    after(() => {
      MoviesModel.create.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('É possível buscar um filme pelo seu ID', () => {
  const payloadMovieId = ObjectId();

  const payloadMovie = {
    id: payloadMovieId,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  describe('quando o filme é encontrado', () => {
    before(() => sinon.stub(MoviesModel, 'getById').resolves(payloadMovie));

    after(() => MoviesModel.getById.restore());

    it('deve usar o id passado como argumento para fazer a busca', async () => {
      await MoviesService.getById(payloadMovieId);
      expect(MoviesModel.getById.calledWith(payloadMovieId)).to.be.true;
    })

    it('retorna um objeto', async () => {
      const result = await MoviesService.getById(payloadMovieId);
      expect(result).to.be.a('object');
    })
  })

  describe('quando o filme não for encontrado', () => {
    before(() => sinon.stub(MoviesModel, 'getById').resolves(null));

    after(() => MoviesModel.getById.restore());

    it('retorna null', async () => {
      const result = await MoviesService.getById(payloadMovieId);
      expect(result).to.be.null;
    })
  })
})

describe('É possível remover um filme', () => {
  describe('quando for removido com sucesso', () => {
    let payloadMovie;
    let movieId;

    beforeEach(() => {
      movieId = ObjectId;

      payloadMovie = {
        _id: movieId,
        title: 'Os três porquinhos',
        directedBy: 'Sr. anônimo',
        releaseYear: 1900
      }

      sinon.stub(MoviesModel, 'remove').resolves(payloadMovie);
    })

    afterEach(() => MoviesModel.remove.restore());

    it('utiliza o id recebido por parâmetro', async () => {
      await MoviesService.remove(movieId);
      expect(MoviesModel.remove.calledWith(movieId)).to.be.true;
    })

    it('retorna um objeto com o filme removido', async () => {
      const result = await MoviesService.remove(movieId);
      expect(result).to.deep.equal(payloadMovie);
    })
  })

  describe('quando a remoção falhar', () => {
    const errorMock = {
      err: {
        code: 'badRequest',
        message: 'Não foi possível remover o filme'
      }
    }
    
    before(() => sinon.stub(MoviesModel, 'remove').resolves(null));

    after(() => MoviesModel.remove.restore());

    it('retorna um objeto de error', async () => {
      const result = await MoviesService.remove(ObjectId());
      expect(result).to.deep.equal(errorMock);
    })
  })
})
