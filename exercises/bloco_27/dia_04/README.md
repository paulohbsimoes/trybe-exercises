# Atividades

## Instruções para realização dos exercícios

Esses exercícios serão realizados um pouco diferente. Iremos implementar novas funcionalidades no projeto visto no conteúdo e na aula ao vivo. Seguiremos a mesma metodologia, implementando os requisitos solicitados utilizando TDD em cada camada por vez.

## Detalhes do projeto

**1-** Primeiro, crie um novo diretório para o projeto.

**2-** Inicie o projeto com o **npm**:

```bash
npm init -y
```

**3-** Instale os pacotes utilizados:

```bash
npm install body-parser express mongodb
```

**4-** Instale também os pacotes de desenvolvimento:

```bash
npm install -D mocha chai sinon mongodb-memory-server
```

**5-** Adicione o script para rodar os testes no **package.json**, dentro de **"scripts"**:

```json
"test": "mocha tests --recursive --exit"
```

**6-** Iremos criar a seguinte estrutura de arquivos e diretórios:

```bash
└── controllers
│   └── movieController.js
└── models
│   └── connection.js
│   └── movieModel.js
└── services
│   └── movieService.js
└── tests
│   ├── controllers
│   │   └── movieController.test.js
│   ├── services
│   │   └── movieService.test.js
│   └── models
│       └── movieModel.test.js
└── index.js
    └── package.json
```

**7-** Configure os seguintes arquivos conforme códigos já implementados.

* **index.js**

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.get('/movies', MovieController.getAll);

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
```

* **controllers/movieController.js**

```javascript
const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .send('Dados inválidos');
  }

  res.status(201)
    .send('Filme criado com sucesso!');
};

module.exports = {
  getAll,
  create,
};
```

* **models/connection.js**

```javascript
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => MongoClient
  .connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db('model_example'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

module.exports = connection;
```

* **models/movieModel.js**

```javascript
const connection = require('./connection');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
  getAll,
};
```

* **services/movieService.js**

```javascript
const MoviesModel = require('../models/movieModel');

const getNewMovie = (movieData) => {
  const { id, title, directedBy, releaseYear } = movieData;

  return { id, title, directedBy, releaseYear };
};

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const getAll = async () => {
  const moviesData = await MoviesModel
  .getAll();

  return moviesData.map(getNewMovie);
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
  .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
  getAll,
};
```

* **tests/controllers/movieController.test.js**

```javascript
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Ao chamar o controller de getAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'getAll')
        .resolves([]);
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

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

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
```

* **tests/models/movieModel.test.js**

```javascript
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
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
```

* **tests/services/movieService.test.js**

```javascript
const sinon = require('sinon');
const { expect } = require('chai');

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
```

**8-** Garanta que está tudo ok, rodando os testes:

```bash
npm test
```

**9-** Para subir a aplicação, é necessário ter o MongoDB rodando em sua máquina (Relembre em **23.1 - Introdução ao MongoDB**), feito isso é possível executá-la.

```bash
node index.js
```

**Lembre-se que é possível consumir os endpoints do projeto utilizando o [Postman](https://www.postman.com/)**

# Exercícios

## Proposta e requisitos

Nos exercícios iremos implementar todas as camadas, para adicionar um endpoint que recebe o ID de um filme específico e, então, retorna os detalhes desse filme.

Esse endpoint terá os seguintes cenários:

* Quando é encontrado um filme com o **ID** passado pela pessoa usuária deverá retornar um objeto com todas as propriedades do filme e o código http **200 - OK** no **status** da **response**.

* Quando não é encontrado nenhum filme com o **ID** passado pela pessoa usuária deverá responder com código http **404 - Not Found** no status da response e com a mensagem "Filme não encontrado."

**1-** Seguindo o **TDD**, implemente a camada de **model** necessária para o end-point, aplicando os comportamentos para atender aos requisitos:

* Crie os testes da camada de **model**. Como essa camada é responsável por realizar as operações no BD, adicione as operações necessárias para que o endpoint funcione conforme esperado.

* Implemente os métodos para atender aos cenários descritos nos testes.

* Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar qualquer operação de leitura e escrita.

**2-** Também seguindo o TDD, implemente a camada de **service** do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

* Crie os testes da camada de **service**. Lembre-se que essa camada é responsável pelas regras de negócio, e deverá fazer os tratamentos necessários com o input recebido do **controller** e com o output recebido do **model**.

* Implemente os métodos necessários para atender aos testes.

* Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

**3-** Também seguindo o **TDD**, implemente a camada de **controller** do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.

* Crie os testes da camada de **controller**. Lembre-se que essa camada é responsável por toda a comunicação com a pessoa usuária, devendo tratar seu input e output. Outro ponto de atenção é que diferente das outras camadas, os **controllers** são **middlewares** e será necessário criar asserções com os **stubs** para testar seus comportamentos.

* Implemente o código necessário para atender os cenários descritos nos testes.

* Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

**4-** Faça os ajustes no **index.js** para finalizar o endpoint.

## Bônus

**1-** Seguindo a mesma ideia dos exercícios anteriores, implemente o endpoint de exclusão de filmes na aplicação. Lembre-se de utilizar o **TDD** e implementar todas as camadas do padrão **MSC**.
