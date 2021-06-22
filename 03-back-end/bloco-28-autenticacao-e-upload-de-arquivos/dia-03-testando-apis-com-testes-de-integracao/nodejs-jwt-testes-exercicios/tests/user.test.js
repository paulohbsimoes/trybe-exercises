const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient, ObjectId } = require('mongodb');

const { expect } = require('chai');
const server = require('../server');
const getConnectionMock = require('./getConnectionMock');

chai.use(chaiHttp);

describe('É possível buscar um usuário pelo ID', () => {
  let conn;

  before(async () => {
    conn = await getConnectionMock();
    sinon.stub(MongoClient, 'connect').resolves(conn);
  });

  after(() => MongoClient.connect.restore());


  describe('Caso o token não seja passado', () => {
    let response = {};

    before(async () => {
      response = await chai.request(server)
        .get(`/api/users/${ObjectId()}`)
        .send();
    })

    it('retorna erro 404', () => {
      expect(response).to.have.status(404);
    })

    it('retornar a mensagem de token não encontrado', () => {
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('Token não encontrado ou informado');
    })
  })

  describe('O usuário só pode ver seus próprios dados', () => {
    before(async () => {
      const db = await conn.db('jwt_exercise');
      
      const userId = ObjectId();

      await db.collection('users')
        .insertMany([
          { username: 'user1', password: 'senha1' },
          { _id: userId, username: 'user2', password: 'senha2' },
        ]);

      const token = await chai.request(server)
        .post('/api/login')
        .send({ username: 'user1', password: 'senha1' })
        .then(({ body }) => body.token);

      response = await chai.request(server)
        .get(`/api/users/${userId}`)
        .set('Authorization', token)
        .send();
    })

    after(async () => {
      await conn.db('jwt_exercise').collection('users').deleteMany({});
    })

    it('retorna o código de status 401', () => {
      expect(response).to.have.status(401);
    })

    it('retorna uma messagem de Acesso Negado', () => {
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.equal('Acesso negado');
    })
  })

  describe('Caso o token seja válido', () => {
    let response = {};
    let payloadUser = { username: 'username', password: 'password' };

    before(async () => {
      const db = await conn.db('jwt_exercise');

      const { insertedId } = await db.collection('users')
        .insertOne(payloadUser);

      const token = await chai.request(server)
        .post('/api/login')
        .send({
          username: 'username',
          password: 'password'
        })
        .then(({ body }) => body.token );

      response = await chai.request(server)
        .get(`/api/users/${insertedId}`)
        .set('Authorization', token)
        .send()
    })

    after(async () => {
      await conn.db('jwt_exercise').collection('users').deleteMany({});
    })

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    })

    it('retorna um objeto com os dados do usuário', () => {
      expect(response.body).to.be.a('object');
      expect(response.body.username).to.equal(payloadUser.username);
      expect(response.body.password).to.equal(payloadUser.password);
    })
  })
})
