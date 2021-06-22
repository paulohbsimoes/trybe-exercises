const math = require('../src/2-math');

jest.mock('../src/2-math');

describe('math', () => {
  describe('subtrair', () => {
    const spy = jest.spyOn(math, 'subtrair');
    afterEach(spy.mockReset);

    it('Faça o mock da funcão subtrair e teste sua chamada', () => {
      math.subtrair(3, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveBeenLastCalledWith(3, 2);
    });

    it('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor 20. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {
      spy.mockReturnValue(20);
      
      math.subtrair(2, 5);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(2, 5);
      expect(spy).toHaveLastReturnedWith(20);

      math.subtrair(3, 1);
      expect(spy).toBeCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith(3, 1);
      expect(spy).toHaveLastReturnedWith(20);

      spy.mockRestore();

      math.subtrair(3, 1);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(3, 1);
      expect(spy).toHaveLastReturnedWith(undefined);
    })
  });

  describe('multiplicar', () => {
    it('Faça o mock da função multiplicar e implemente como retorno padrão o valor 10. Teste a chamada e o retorno', () => {
      const spy = jest.spyOn(math, 'multiplicar').mockReturnValue(10);

      math.multiplicar(2, 2)
      expect(spy).toBeCalled();
      expect(spy).toHaveLastReturnedWith(10);

      spy.mockRestore();
    })
  })
  
  describe('somar', () => {
    it('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
      const spy = jest.spyOn(math, 'somar').mockImplementation((a, b) => a + b);

      math.somar(1, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveLastReturnedWith(3)    
      expect(spy).toHaveBeenLastCalledWith(1, 2);

      spy.mockRestore();
    });
  });

  describe('dividir', () => {
    const spy = jest.spyOn(math, 'dividir');

    it('Faça o mock da função dividir e implemente um retorno padrão com o valor 15. Implemente também os seguintes valores para a primeira e segunda chamadas: 2 e 5. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {
      spy.mockReturnValueOnce(2).mockReturnValueOnce(5).mockReturnValue(15);

      math.dividir(10, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveReturnedWith(2);
      expect(spy).toHaveBeenLastCalledWith(10, 2);
      expect(spy).toBeCalledTimes(1);

      math.dividir(10, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveReturnedWith(5);
      expect(spy).toHaveBeenLastCalledWith(10, 2);
      expect(spy).toBeCalledTimes(2);

      math.dividir(10, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveReturnedWith(15);
      expect(spy).toHaveBeenLastCalledWith(10, 2);
      expect(spy).toBeCalledTimes(3);

      math.dividir(5, 2);
      expect(spy).toBeCalled();
      expect(spy).toHaveReturnedWith(15);
      expect(spy).toHaveBeenLastCalledWith(5, 2);
      expect(spy).toBeCalledTimes(4);

      spy.mockRestore();
    });
  });
});
