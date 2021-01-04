const { expect } = require('@jest/globals');
const sum = require('../src/soma.js');

describe('sum', () => {
  it('Retorna a soma do parâmetro a com o b', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(5, 5)).toBe(10);
    expect(sum(-5, 5)).toBe(0);
    expect(sum(2, 2)).toBe(4);
  });

  it('Lança um erro quando uma string é passada como argumento', () => {
    expect(() => { sum(4, '5'); }).toThrow();
    expect(() => { sum(4, '5'); }).toThrow('parameters must be numbers');
  });
});
