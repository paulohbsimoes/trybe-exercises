# Exercícios

1. Escreva um teste que verifique a chamada do callback de uma função **uppercase**, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

```javascript
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
```

**Código-base para os exercícios 2 e 3:**

O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma _Promise_, que é utilizada pelo método `getUserName`.

```javascript
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}
```

2. Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função **getUserName** para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável **users**, para saber quais IDs existem.

3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
Dica: Utilize o try/catch para o caso de erro.

4. O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL _**'https://api.github.com/users/tryber/repos'**_, faça um teste que verifique que os repositórios _**'sd-01-week4-5-project-todo-list'**_ e _**'sd-01-week4-5-project-meme-generator'**_ se encontram nessa lista.

```javascript
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
```

5. Para este exercício, tente adivinhar a saída dos **console.log** dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do **beforeEach** e do **afterEach**.

```javascript
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```

Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

6. Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

```javascript
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
```

Use como base para os exercícios a seguir:

6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

```javascript
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
)

const getAnimal = (name) => {
  // Adicione o código aqui.
}
// ---------------------

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
```

6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
