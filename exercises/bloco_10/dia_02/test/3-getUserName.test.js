const getUserName = require('../src/2-getUserName.js');

describe('getUserName', () => {
  it('should return a user when called with id 4', async () => {
    expect(await getUserName(4)).toBe('Mark');
  });
  
  it('should return an error object when called with id 7', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  });
});
