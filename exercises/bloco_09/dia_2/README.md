# Exercícios

## Para fixar

* O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

* Quando você tem que enfileirar várias callbacks , que problema surge?

* Por que as Promises são uma forma de se resolver esse problema?

* Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

* Dada a resposta anterior, o que é fetch e para que ele serve?

## Agora, a prática

1. Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos fazer juntos!

* Primeiro, veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api) . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API :

  * Para começar, vamos fazer uma requisição via browser. Visite o site [icanhazdadjoke](https://icanhazdadjoke.com), e perceba que ele devolve uma página HTML com uma piada aleatória.

  * Em seguida, no terminal, vamos fazer a requisição: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

  * Para a próxima requisição, vamos usar o comando: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. Veja que agora recebemos apenas a piada aleatória em formato texto.

  * Por fim, faça a requisição: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave `Accept`: no header, definido por -H no comando, o serviço nos retorna uma resposta diferente.

* Utilize o HTML e o `js` a seguir como base:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```javascript
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

* Agora vamos tentar fazer as requisições a API usando `fetch` . Essa função recebe dois parâmetros.

  1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.

  2. Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves `method`: e `headers`:

```javascript
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject);
```

```
O segundo parâmetro( `myObject` ) define o tipo de request( `method: 'GET'` ) e o formato da resposta( `headers: { 'Accept': 'application/json' }` ), como visto nas requisições via `curl`.
```

* A função `fetch` **é uma Promise** e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas `.then` (em caso de sucesso) e `.catch` (em caso de falha). A requisição `fetch` retorna um objeto Response. Utilizando `.then`, verifique a estrutura da resposta usando um `console.log` na `response` retornada pelo `fetch`.

```javascript
fetch(API_URL, myObject)
  .then(response => console.log(response));
```

* Viu a reponse? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

```
Para isso, usamos o método `.json()` na resposta da _API_. Esse método converte o conteúdo do `body` da _Response_ e retorna uma outra _Promise_, que, quando bem-sucedida, retorna um _JSON_ contendo as informações da piada.
A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.
```

```javascript
fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => console.log(data));
```

* Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then` e um `catch` à Promise com qualquer coisa dentro só para que o código funcione.

* Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

4. Quando a Promise for rejeitada, imprima, via `console.log` , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

## Bônus

* Utilize somente Higher Order Functions para fazer as operações com o array;

* Refatore a Promise para utilizar somente async e await .
