const myFizzBuzz = require('../src/myFizzBuzz.js');

describe('myFizzBuzz', () => {
  it('Se o número for divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Se o número for divisível apenas por 3 retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('Se o número for divisível apenas por 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('Se o número não for divisível nem por 4 nem por 5 retorna o número', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  it('Se o argumento não for um número retorna false', () => {
    expect(myFizzBuzz('Not a number')).toBeFalsy();
  });
})
