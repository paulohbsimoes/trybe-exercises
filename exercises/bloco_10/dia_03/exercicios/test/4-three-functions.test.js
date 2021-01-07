const service = require('../src/4-three-functions');

describe("myToUpperCase", () => {
  const spy = jest.spyOn(service, 'myToUpperCase');
  afterEach(spy.mockReset);

  it('should change all lowercase characters to uppercase', () => {
    service.myToUpperCase('hello world');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('hello world');
    expect(spy).toHaveLastReturnedWith('HELLO WORLD');
  });

  it('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
    spy.mockImplementation(str => str.toLowerCase());
    service.myToUpperCase('HELLO WORLD');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('HELLO WORLD');
    expect(spy).toHaveLastReturnedWith('hello world');
  });
});

describe("justTheFirstLetter", () => {
  const spy = jest.spyOn(service, 'justTheFirstLetter');
  afterEach(spy.mockReset);

  it('should return only the first letter of the string', () => {
    service.justTheFirstLetter('hello world');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('hello world');
    expect(spy).toHaveLastReturnedWith('h');
  });

  it('deve retornar a última letra de uma string', () => {
    spy.mockImplementation(str => str[str.length - 1]);
    service.justTheFirstLetter('hello world');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('hello world');
    expect(spy).toHaveLastReturnedWith('d');
  });
});

describe("concatStrings", () => {
  const spy = jest.spyOn(service, 'concatStrings');
  afterEach(spy.mockReset);

  it('should concat strings passed as arguments', () => {
    service.concatStrings('hello', 'world');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('hello', 'world');
    expect(spy).toHaveLastReturnedWith('helloworld');
  });

  it('deve receber três strings e concatená-las', () => {
    spy.mockImplementation((...strings) => strings.join(' '));
    service.concatStrings('hello', 'amazing', 'world');
    expect(spy).toBeCalled();
    expect(spy).toHaveBeenLastCalledWith('hello', 'amazing', 'world');
    expect(spy).toHaveLastReturnedWith('hello amazing world');
  });
});
