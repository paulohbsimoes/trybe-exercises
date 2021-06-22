const service = require('../src/4-three-functions');

describe("myToUpperCase", () => {
  it('should change all lowercase characters to uppercase', () => {
    const spy = jest.spyOn(service, 'myToUpperCase').mockImplementation(str => str.toLowerCase());

    service.myToUpperCase('HELLO WORLD');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('HELLO WORLD');
    expect(spy).toHaveLastReturnedWith('hello world');

    spy.mockRestore();
    expect(service.myToUpperCase('hello world')).toBe('HELLO WORLD');
  });
});
