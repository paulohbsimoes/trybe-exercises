const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const addObjProperty = (obj, key, val) => obj[key] = val;

console.log(lesson2);

addObjProperty(lesson2, 'turno', 'manhã');

console.log(lesson2);

// Exercício 2

const listObjKeys = obj => Object.keys(obj).forEach(key => console.log(key));

listObjKeys(lesson3);

// Exercício 3

const getObjSize = obj => Object.keys(obj).length;

console.log(getObjSize(lesson3));

// Exercício 4

const listObjValues = obj => Object.values(obj).forEach(value => console.log(value));

listObjValues(lesson3);

// Exercício 5

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
}

console.log(allLessons);

// Exercício 6

const getStudentsNumber = () => {
  return Object.entries(allLessons)
    .map(([_, val]) => val.numeroEstudantes)
    .reduce((acc, cur) => acc + cur);
}

console.log(getStudentsNumber());

// Exercício 7

const getValueByNumber = (obj, pos) => obj[Object.keys(obj)[pos]]

console.log(getValueByNumber(lesson1, 0));

// Exercício 8

const verifyPair = (obj, key, value) => {
  return Object.entries(obj).some(([currentKey, currentValue]) => currentKey === key && currentValue === value);
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
