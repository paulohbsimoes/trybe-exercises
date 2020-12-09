## 1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
É um código que não bloqueia a aplicação enquanto é executado, o fluxo de execução continua. A diferença é que o código síncrono é executado em sequência, "travando" a execução até que seja concluído.

## 2. Quando você tem que enfileirar várias callbacks , que problema surge?
Ao colocar várias callbacks aninhadas causamos um problema chamado [callback hell](http://callbackhell.com/) que torna o código difícil de ler. Uma das formas apresentadas para resolver este problema seria declarar as funções de callback, ao invés de criar várias funções anônimas. Passando o nome da função como callback evitamos colocar vários `})` no final da função assíncrona, e reduzimos o efeito callback hell.

## 3. Por que as Promises são uma forma de se resolver esse problema?
Ao invés de aninharmos várias callbacks, as promises nos permitem encadear .then e .catch um após o outro.

## 4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
Como não sabemos o tempo de resposta, e isso depende de vários fatores como qualidade da conexão e posição geográfica, a comunicação com APIs é feita de maneira assíncrona.

## 5. Dada a resposta anterior, o que é fetch e para que ele serve?
`fetch` é uma função da [API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) que fornece uma maneira fácil de buscar recursos de forma assíncrona através da rede. Podemos utilizá-la para consumir API's, por exemplo.
