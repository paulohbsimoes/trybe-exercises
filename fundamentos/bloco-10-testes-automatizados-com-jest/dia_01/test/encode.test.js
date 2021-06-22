const encode = require('../src/encode.js');

describe('encode', () => {
  it('Deve ser uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('As vogais a, e, i, o e u devem ser convertidas para 1, 2, 3, 4, 5 respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
    expect(encode('hello')).toBe('h2ll4');
  });
  
  it('A string retornada deve ter o mesmo length da original', () => {
    const str = 'hello';
    expect(encode(str)).toHaveLength(str.length);
  });
});
