const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }
      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const result = Animals.find(animal => animal.name === name);
    if (result !== undefined) {
      resolve(result);
    } else {
      reject('Nenhum animal com esse nome!');
    }
  })
)

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
}

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const result = Animals.find(animal => animal.age === age);
    if (result !== undefined) {
      resolve(result);
    } else {
      reject('There\'s no animals with this age!');
    }
  })
)

const getAnimalByAge = (age) => (
  findAnimalByAge(age)
)

module.exports = {
  getListAnimals,
  getAnimal,
  getAnimalByAge,
};
