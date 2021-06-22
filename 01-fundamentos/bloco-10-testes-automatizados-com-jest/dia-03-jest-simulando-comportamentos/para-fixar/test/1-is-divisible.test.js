const isDivisible = require('../src/1-is-divisible');
const randomNumber = require('../src/1-random-number');

describe('isDivisible', () => {
  it('should call randomNumber when invoked', () => {
    const spy = jest.spyOn(randomNumber, 'randomNumber');
    isDivisible.isDivisible(10);
    expect(spy).toBeCalled();
    expect(spy).toBeCalledTimes(1);
  });
});
