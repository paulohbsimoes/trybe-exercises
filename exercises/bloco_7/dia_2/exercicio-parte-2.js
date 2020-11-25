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
