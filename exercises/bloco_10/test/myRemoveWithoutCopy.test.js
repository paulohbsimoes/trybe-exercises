const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy.js');

describe('myRemoveWithoutCopy', () => {
  it('Remove o elemento do array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('O array é alterado ao remover o elemento', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1, 2, 4]);
  })
});
