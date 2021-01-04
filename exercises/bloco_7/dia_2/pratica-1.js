// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto,
// o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a 
// nova chave adicionada nele.

const person = {
  name: 'Paulo',
  lastname: 'Simões'
}

function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(person);

addProperty(person, 'idade', 24);

console.log(person);