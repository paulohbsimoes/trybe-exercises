const myDeepCompare = require('../src/myDeepCompare.js');

describe('compare', () => {
  it('Ao comparar dois tipos primitivos retorna true se os valores forem iguais e false caso contrário', () => {
    expect(myDeepCompare('Paulo', 'Paulo')).toBeTruthy();
    expect(myDeepCompare('Paulo', 'Henrique')).toBeFalsy();
    expect(myDeepCompare(1, 1)).toBeTruthy();
    expect(myDeepCompare(1, 5)).toBeFalsy();
  })
  it('Ao comparar dois objetos retorna true se os objetos forem identicos e false caso contrário', () => {
    const obj1 = {
      title: 'My Title',
      description: 'My Description',
    };
    
    const obj2 = {
      description: 'My Description',
      title: 'My Title',
    };
    
    const obj3 = {
      title: 'My Different Title',
      description: 'My Description',
    };

    expect(myDeepCompare(obj1, obj2)).toBeTruthy();
    expect(myDeepCompare(obj1, obj3)).toBeFalsy();
    expect(myDeepCompare(obj2, obj3)).toBeFalsy();
  })
});
