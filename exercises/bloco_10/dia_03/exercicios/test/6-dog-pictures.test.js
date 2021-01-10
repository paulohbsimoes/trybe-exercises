const service = require('../src/6-dog-pictures');

describe('getDogPicture', () => {
  const spy = jest.spyOn(service, 'getDogPicture');
  afterEach(spy.mockReset);

  it('should return "request success" when succeed', () => {
    spy.mockResolvedValue('request success');
    expect(service.getDogPicture()).resolves.toBe('request success')
    expect(spy).toBeCalledTimes(1);
  })

  it('should return "request failed" when failed', () => {
    spy.mockRejectedValue('request failed');
    expect(service.getDogPicture()).rejects.toBe('request failed')
    expect(spy).toBeCalledTimes(1);
  })
})
