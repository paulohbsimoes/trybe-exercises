Esse é um projeto para o conteúdo sobre `Context API`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch` 

Verifique se as seguintes branchs apareceram:

  `exercise-one`
  `exercise-two`
  `exercise-three`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Refaça o exercício 2 do dia 16.2, descrito abaixo, substituindo o Redux pela Context API para gerenciar o estado da aplicação.

Nesse exercício temos três carros com as cores Red, Blue e Yellow. Cada um deles apresenta um botão que ao ser clicado passa um estado para o Redux com um booleano.

Esse estado irá ser utilizado para alterar o CSS com a imagem do carro, para que ele se mova ou não.

Nesse exercício toda a estrutura de Redux já está pronta. Utilize Context API em substituição ao Redux para armazenar todo o estado da aplicação.

---

#### Exercício 2

Refaça o exercício 3 do dia 16.2, descrito abaixo. Assim como no exercício anterior, refatore a aplicação para utilizar Context API para gerenciar estado no lugar do Redux.

Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui foi feita a junção dos reducers dos dois primeiros exercícios para que eles possam ser carregados juntos na mesma página da aplicação.

O funcionamento dos dois componentes DEVE se manter o mesmo.

Nesse exercício toda a estrutura de Redux já está pronta, você precisará refatorar a estrutura dele para Context API.

---

#### Exercício 3 

Refatore o exercício sobre o Reddit que está na branch `exercise-three` do repositório [exercise-contextAPI-refactoring](https://github.com/tryber/exercise-contextAPI-refactoring/tree/master). Mofique a aplicação para utilizar Context API para gerenciar o estado no lugar de Redux.

---
