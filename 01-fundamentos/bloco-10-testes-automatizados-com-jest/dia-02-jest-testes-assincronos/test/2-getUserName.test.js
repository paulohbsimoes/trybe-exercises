const getUserName = require('../src/2-getUserName.js');

describe('getUserName', () => {
  it('should return a user when called with id 4', () => {
    return getUserName(4).then(data => expect(data).toBe('Mark'));
  })
  
  it('should return an error object when called with id 7', () => {
    expect.assertions(1);
    return getUserName(7).catch(data => {
      expect(data).toEqual({ error: 'User with 7 not found.' });
    });
  })
});
