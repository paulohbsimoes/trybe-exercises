const decode = require('../src/decode.js');

describe('decode', () => {
  it('Deve ser uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Os números 1, 2, 3, 4 e 5 devem ser convertidas para a, e, i, o, u respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
    expect(decode('h2ll4')).toBe('hello');
  });

  it('A string retornada deve ter o mesmo length da original', () => {
    const str = 'h2ll4';
    expect(decode(str)).toHaveLength(str.length);
  });
});
