const writeToFile = require('../src/writeToFile');
const { expect } = require('chai');
const uuid = require('node-uuid')
const fs = require('fs/promises');
const sinon = require('sinon');
sinon.stub(fs, 'writeFile').resolves('Success');

describe('A função "writeToFile" deve', () => {
  it('lançar um error quando receber um número de argumentos diferente de 2', async () => {
    try {
      await writeToFile();
    } catch (error) {
      expect(error).to.match(/Número de argumentos inválido/);
    }
  })

  it('retornar "ok" após realizar a escrita no arquivo', async () => {
    const FILEPATH = `./teste-${uuid()}.txt`;
    const CONTENT = "CONTEÚDO DO ARQUIVO";
    const result = await writeToFile(FILEPATH, CONTENT);
    expect(result).to.be.equal('ok');
  })
})
