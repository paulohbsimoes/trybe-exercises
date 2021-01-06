const uppercase = require('../src/1-uppercase.js');

describe('uppercase', () => {
  it('should return a string converting all lowercase characters to uppercase', done => {
    uppercase('ola mundo', (result) => {
      expect(result).toBe('OLA MUNDO');
      done();
    });
  });
});
