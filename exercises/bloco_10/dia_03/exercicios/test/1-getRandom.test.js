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

  it('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
    spy.mockImplementationOnce((a, b) => a / b);

    getRandom.getRandom(10, 2);  
    expect(spy).toHaveBeenLastCalledWith(10, 2);
    expect(spy).toHaveLastReturnedWith(5);
    expect(spy).toBeCalledTimes(1);

    getRandom.getRandom(10, 2);
    expect(spy).toHaveBeenLastCalledWith(10, 2);
    expect(spy).toHaveLastReturnedWith(undefined);
    expect(spy).toBeCalledTimes(2);
  });
});
