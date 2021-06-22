const { getAnimal, getAnimalByAge } = require('../src/6-getListAnimals.js');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('getAnimalByAge', () => {
  it('should return the first animal of the array with the given age', async () => {
    expect(await getAnimalByAge(1)).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    expect(await getAnimalByAge(5)).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
  });
  it('should throw an error if there is no animal with the given age', () => {
    expect.assertions(1);
    return getAnimalByAge(30).catch(error => {
      expect(error).toBe('There\'s no animals with this age!');
    })
  });
});
