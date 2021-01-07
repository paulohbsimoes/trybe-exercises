const getRandom = require('../src/1-getRandom');

describe('getRandom', () => {
  const spy = jest.spyOn(getRandom, 'getRandom');
  afterEach(spy.mockReset);

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

  it('Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro', () => {
    spy.mockImplementation((...args) => args.reduce((acc, cur) => acc * cur));

    getRandom.getRandom(10, 2, 2);  
    expect(spy).toHaveBeenLastCalledWith(10, 2, 2);
    expect(spy).toHaveLastReturnedWith(40);
    expect(spy).toBeCalledTimes(1);

    getRandom.getRandom(2, 2, 2);  
    expect(spy).toHaveBeenLastCalledWith(2, 2, 2);
    expect(spy).toHaveLastReturnedWith(8);
    expect(spy).toBeCalledTimes(2);

    spy.mockReset();
    spy.mockImplementation(x => x * 2);

    getRandom.getRandom(10);
    expect(spy).toHaveBeenLastCalledWith(10);
    expect(spy).toHaveLastReturnedWith(20);
    expect(spy).toBeCalledTimes(1);

    getRandom.getRandom(77);
    expect(spy).toHaveBeenLastCalledWith(77);
    expect(spy).toHaveLastReturnedWith(154);
    expect(spy).toBeCalledTimes(2);
  });
});
