# Exercícios

## Praticando a implementação de testes

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. A função sum(a, b) retorna a soma do parâmetro `a` com o `b`

  - Teste se o retorno de `sum(4, 5)` é `9`

  - Teste se o retorno de `sum(0, 0)` é `0`

  - Teste se a função `sum` lança um erro quando os parametros são `4` e `"5"`(string 5)

  - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada `sum(4, "5")`

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

2. A função `myRemove(arr, item)` recebe um array `arr` e retorna uma cópia desse array sem o elemento `item` caso ele exista no array

  - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` retorna o array esperado

  - Verifique se a chamada `myRemove([1, 2, 3, 4], 3)` não retorna o array `[1, 2, 3, 4]`

  - Verifique se o array passado por parâmetro **não** sofreu alterações

  - Verifique se a chamada `myRemove([1, 2, 3, 4], 5)` retorna o array esperado

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

3. A função `myRemoveWithoutCopy(arr, item)` recebe um array `arr` e retorna o próprio array sem o elemento `item` caso ele exista no array

  - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` retorna o array esperado

  - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 3)` **não** retorna o array `[1, 2, 3, 4]`

  - Faça uma chamada para a função `myRemoveWithoutCopy` e verifique se o array passado por parâmetro sofreu alterações

  - Verifique se a chamada `myRemoveWithoutCopy([1, 2, 3, 4], 5)` retorna o array esperado

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

4. A função `myFizzBuzz(num)` recebe um número `num` e retorna `"fizzbuzz"` se o número for divisível por `3` e `5`, retorna `"fizz"` se for divisível apenas por `3`, retorna `"buzz"` se divisível apenas por `5`, retorna o próprio número caso não seja divisível por `3` ou `5` e retorna `false` caso `num` não seja um número

  - Faça uma chamada com um número divisível por `3` e `5` e verifique se o retorno é o esperado

  - Faça uma chamada com um número divisível por `3` e verifique se o retorno é o esperado

  - Faça uma chamada com um número divisível por `5` e verifique se o retorno é o esperado

  - Faça uma chamada com um número que não é divisível por `3` ou `5` e verifique se o retorno é o esperado

  - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

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

## Praticando TDD

Nessa parte os exercícios estão divididos em dois grupos: primeiro, você vai escrever código baseado nos testes. Depois você lerá um código e o que ele tem que trazer de resposta. A partir disso, você escreverá testes e os usará de base para alterar o código. Como assim? Bem, vamos passo a passo!

### Escrevendo código para testes

Dados os casos de testes abaixo, escreva as funções de forma a passar nos testes. **É importante nunca alterar os testes ou as variáveis já escritas no código:**

Copie os testes já implementadas e desenvolva as funções. Separe as funções em arquivos para evitar qualquer tipo de problema.

1. Escreva a função addOne para passar nos testes já implementados.

```javascript
const assert = require('assert');
// escreva a função addOne aqui

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
```

2. Escreva a função wordLengths para passar nos testes já implementados.

```javascript
const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
```

3. Escreva a função addAllnumbers para passar nos testes já implementados.

```javascript

const assert = require('assert');
// escreva a função addAllnumbers aqui

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
```

4. Escreva a função findTheNeedle para passar nos testes já implementados.

```javascript
  const assert = require('assert');
// escreva a função findTheNeedle aqui

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
```

### Reescrevendo funções utilizando TDD

Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, depois, altere-a para que passe nos testes. Use os casos de teste acima como inspiração, se tiver dúvidas!

> Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.

1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

```javascript
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
```

2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
  
```javascript
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(characters[i]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
```

3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

```javascript
const greaterThanTen = (array) => {
  let results = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results += array[i];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
```

4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

```javascript
function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x + y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
```

# Bônus

## Bônus 1

Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.

### Requisitos

Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.

### Critérios de aceite

- Uma chamada bem-sucedida de uma função `getChange` deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa

- Essa lista deve estar no formato decrescente de valor

- É permitida a repetição do valor de moedas, por exemplo, `[200, 100, 50, 20, 10, 2, 2]`

- Um erro com a mensagem **paid value is not enough** deve ser lançado se o valor pago for menor que o valor da compra

### Moedas disponíveis

As moedas serão representadas pelos valores `200, 100, 50, 20, 10, 5, 2` e `1`. Abaixo, existe uma lista de correspondência com os valores em reais (R$)

- 200 (R$2)
- 100 (R$1)
- 50 (R$0,50)
- 20 (R$0,20)
- 10 (R$0,10)
- 5 (R$0,05)
- 2 (R$0,02)
- 1 (R$0,01)

A **quantidade** de cada moeda é infinita, imagine que isso é uma simplificação do problema.


### Exemplo

Se uma pessoa comprar itens com valor total igual a R$2,15 (ou seja, 215) e pagar R$3 (ou seja, 300), o valor do troco é R$0,85 (ou seja, 85). Para entregar esse troco à pessoa, deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista `[50, 20, 10, 5]`.

### Implementação

Finalize a implementação da função `getChange(payable, paid)`.

- `payable` é o valor a ser pago, ou o valor total

- `paid` é o valor que a pessoa pagou

```javascript
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...

  return change;
}
```

### Testes unitários

Como dito anteriormente, os testes unitários já estão prontos, e sua implementação deve passar por todos eles.

```javascript
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
```

## Bônus 2

Escreva a função factorial para passar nos testes já implementados.

```javascript
const assert = require('assert');
// escreva a função factorial aqui

const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
```

## Bônus 3

Escreva a função removeMiddle para passar nos testes já implementados.

```javascript
const assert = require('assert');
// escreva a função removeMiddle aqui

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
```

## Bônus 4

Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

> Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.

```javascript
const getLargestNumber = (array) => {
    let largestNumber;
    for (let i = 0; i < array.length - 1; i += 1) {
        if (array[i] > array[i + 1]) {
            largestNumber = [array[i]];
        }
    }
    return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
```

## Bônus 5

**Kata** ou **Code Kata** são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.

[Kata 'Verificador de senhas'](https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier): Crie uma função Verify() que retorne `false` para os casos listados no repositório e `true` caso contrário. Não é necessário fazer os itens extras (2, 3 e 4) do repositório.
