# Exercícios

## Parte I

**Refaça os exercícios 1 a 5 do conteúdo de Testes unitários em JavaScript, dessa vez utilizando Jest.**

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. A função sum(a, b) retorna a soma do parâmetro a com o b

* Teste se o retorno de sum(4, 5) é 9
* Teste se o retorno de sum(0, 0) é 0
* Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
* Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

```javascript
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
```

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
* Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
* Verifique se o array passado por parâmetro não sofreu alterações
* Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

```javascript
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
```

3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
* Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
* Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

```javascript
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
```

4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
* Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
* Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
* Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
* Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

```javascript
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
```

5. Compare dois objetos (JSON) para verificar se são idênticos ou não

```javascript
const assert = require('assert');

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

// implemente seus testes aqui
```

## Parte II

No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions. Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as `features` do Javascript ES6.

1. Para as funções `encode` e `decode` crie os seguintes testes:

2. Teste se `encode` e `decode` são funções;

3. Para a função `encode` teste se as vogais **a, e, i, o, u** são convertidas em 1, 2, 3, 4 e 5, respectivamente;

4. Para a função `decode` teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais **a, e, i, o, u**, respectivamente;

5. Teste se as demais letras/números não são convertidos para cada caso;

6. Teste se a `string` que é retornada pelas funções têm o mesmo número de caracteres que a `string` passada como parâmetro.

7. A função `techList` recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

```javascript
{
  tech: 'nomeTecnologia',
  name: name,
}
```

Implemente a função `techList` a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! **É importante nunca alterar os testes ou as variáveis já escritas no código**.

```javascript
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  })
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
```

A função hydrate recebe uma string no formato "numero bebida", e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca. Exemplo:

```javascript
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```

Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código.

```javascript
const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```

## Bônus

1. Você está pronto para um desafio?! Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando:

* A função;

* Os testes para essa função;

Considere os dados abaixo. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele (`firstName , lastName , specialities`). Você também deverá criar os testes para essa função. Sua função deverá então retornar os resultados da busca pelo `id` para aquele funcionário e a informação consultada. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro `"ID não identificada"`. Se a informação que se quer acessar não existir, a função deve retornar o erro `"Informação indisponível"`.

```javascript
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```

Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
