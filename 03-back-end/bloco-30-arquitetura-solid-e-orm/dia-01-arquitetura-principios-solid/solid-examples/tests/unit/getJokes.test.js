const { stub } = require('sinon');
const { expect } = require('chai');

const { getJokes } = require('../../dipExample-2');

const requesterStub = stub();

describe('Testando a função "getJokes"', function () {
  it('"requester stub" é chamado uma vez', function () {
    getJokes(1, requesterStub);

    expect(requesterStub.calledOnce).to.be.equals(true);
  });
});
