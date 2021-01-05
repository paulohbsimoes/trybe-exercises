const { expect } = require('@jest/globals');
const myRemove = require('../src/myRemove.js');

describe('myRemove', () => {
  it('recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);

  });
  it('O array passado como argumento não deve ser alterado', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
