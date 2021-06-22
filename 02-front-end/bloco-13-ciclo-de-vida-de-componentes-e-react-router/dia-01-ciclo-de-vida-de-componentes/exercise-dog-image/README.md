Esse é um projeto para o conteúdo de `Ciclo de vida de componentes em React`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:

git branch

Mude para a branch dog-image com o comando git checkout -b dog-image. É nessa branch que você realizará a solução para o exercício.

Observe o que deve ser feito nas instruções.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/dog-image`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Crie uma aplicação que consuma a API de fotos aleatórias de cachorros. Use a [dog.ceo](https://dog.ceo/dog-api/). Para refrescar a memória acerca de como fazer requisições, revisite [o conteúdo sobre Promises](https://app.betrybe.com/course/fundamentals/js-asynchronous/promises) ou [consulte a documentação](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)!

Observe a estrutura de dados que a API retorna:

```bash 
  {
    "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
  }
```
  -  Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;

  -  Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;

  -  Deve existir um botão que, para cada clique, busque mais um doguinho.


#### Exercício 2

Com o código do exercício anterior, você irá implementar mais algumas funcionalidades:

-  A cada tentativa de atualização do componente, verifique se o campo message tem a palavra terrier. Se sim, não atualize o componente. Pesquise pelo método includes;

-  Guarde a url da última imagem gerada no localStorage após cada atualização.

-  Após a atualização do componente, exiba um alert com a raça do doguinho (verifique o campo message);

#### Bônus

Com o código do ultimo exercício, implemente:

-  A cada foto que for baixada, através de um input, permita que quem usa dê um nome ao doguinho;

-  Crie um botão que guarde o resultado, juntamente com o nome dado ao 'doguinho', em um array;

-  Guarde o array no localStorage a cada atualização, e não mais a url da última imagem gerada;

-  A cada inicialização da aplicação, verifique se existem dados prévios guardados no localStorage. Caso haja, ignore a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exiba a última imagem guardada.
