const { expect } = require('chai');
const isPositive = require('../src/isPositive')

describe('Ao o receber um número como parâmetro "isPositive" deve', () => {
  it('retornar uma string', () => {
    expect(typeof isPositive(1)).to.be.equal('string');
  });

  it('retornar "positivo" quando o número for maior que 0', () => {
    expect(isPositive(10)).to.be.equal('positivo');
  })

  it('retornar "negativo" quando o número for menor que 0', () => {
    expect(isPositive(-10)).to.be.equal('negativo');
  })

  it('retornar "neutro" quando o número igual a 0', () => {
    expect(isPositive(0)).to.be.equal('neutro');
  })
})
