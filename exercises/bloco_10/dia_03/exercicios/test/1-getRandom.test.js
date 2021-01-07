const getRandom = require('../src/1-getRandom');

describe('getRandom', () => {
  getRandom.getRandom = jest.fn();
  const spy = getRandom.getRandom;
  afterEach(spy.mockRestore);

  it('Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    spy.mockReturnValue(10);

    getRandom.getRandom();
    expect(spy).toHaveLastReturnedWith(10);
    expect(spy).toBeCalledTimes(1);

    getRandom.getRandom();
    expect(spy).toHaveLastReturnedWith(10);
    expect(spy).toBeCalledTimes(2);
  });
});
