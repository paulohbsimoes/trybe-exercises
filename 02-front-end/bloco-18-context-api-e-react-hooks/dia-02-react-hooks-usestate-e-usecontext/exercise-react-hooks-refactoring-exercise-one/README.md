Esse é um projeto para o conteúdo sobre `React Hooks`.

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

Refaça o exercício 1 do dia 18.1 substituindo toda a lógica de classes para a lógica de **React Hooks**, deixando todos os componentes funcionais.

Nesse exercício toda a estrutura de Context API já está pronta. Utilize React Hooksj em substituição ao Context API para controlar os estados da aplicação.

---

#### Exercício 2

Refaça o exercício 2 do dia 18.1. Assim como no exercício anterior, refatore a aplicação para utilizar **React Hooks** para gerenciar estado no lugar do Redux.

Nesse exercício toda a estrutura de Context API já está pronta, você precisará refatorar a estrutura dele para React Hooks.

---

#### Exercício 3

Refatore o exercício da branch `exercise three`, referente à aplicação Tic Tac Toe, também substituindo toda a lógica de classes para a lógica de _React Hooks_, deixando todos os componentes funcionais. Aproveite que ele possui testes e veja como é prático refatorar uma aplicação que já foi testada! Lembre-se de acessar a branch `exercise-three`, a estrutura da aplicação estará pronta para ser utilizada.

---