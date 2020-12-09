## 1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
É um código que não bloqueia a aplicação enquanto é executado, o fluxo de execução continua. 

A diferença é que o código síncrono é executado em sequência, "travando" a execução até que seja concluído.

## 2. Quando você tem que enfileirar várias callbacks, que problema surge?
Quando uma função assíncrona depende do resultado de outra função assíncrona, ou quando precisamos garantir que os resultados dessas funções estajam em determinada ordem, colocamos várias callbacks aninhadas, causando um problema conhecido como [callback hell](http://callbackhell.com/), tornando o código difícil de ler e manter. [Este vídeo](https://www.youtube.com/watch?v=EQem2gugonA) mostra um exemplo prático.

<p align="center">
  <img width="500" src="./imgs/callback_hell.jpeg">
</p>

## 3. Por que as Promises são uma forma de se resolver esse problema?
Ao invés de aninharmos várias callbacks, as promises nos permitem encadear .then e .catch um após o outro. [Neste vídeo](https://www.youtube.com/watch?v=GfVMKkUk2Uo) vemos um exemplo prático de como é feito o encadeamento de Promises.

## 4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
Como não sabemos o tempo de resposta, e isso depende de vários fatores como qualidade da conexão e posição geográfica, a comunicação com APIs é feita de maneira assíncrona.

## 5. Dada a resposta anterior, o que é fetch e para que ele serve?
`fetch` é uma função da [API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) que fornece uma maneira fácil de buscar recursos de forma assíncrona através da rede. Podemos utilizá-la para consumir API's, por exemplo.
