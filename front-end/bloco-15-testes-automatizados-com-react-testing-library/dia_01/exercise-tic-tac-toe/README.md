Esse é um projeto para o conteúdo sobre `RTL`, são exercícios **bônus**!

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

Abaixo temos um _gif_ do comportamento da aplicação até a parte 1 do exercício 3:

![TicTacToe](images/tictactoe.gif)

#### Exercício 1

Escreva os testes para as configurações iniciais do jogo:

- Campos vazios;
- Sem mensagem de Fim de jogo;
- 9 Casas renderizadas.

Fique livre para adicionar novos testes. **Após escrever os testes**, crie as funcionalidades testadas para que os testes passem.

---

#### Exercício 2 

Agora, além de realizar alguns testes, será necessário implementar algumas funcionalidades.
O arquivo TicTacToe.js possuí algumas informações de como o jogo deve funcionar.
  - Dois jogadores jogam o jogo;
  - A cada clique em uma casa o jogador deve ser mudado;
  - Cada jogador deverá possuir uma marcação (as imagens que estão no repositório, x.png, o.svg);
  - Ao clicar na casa escolhida, a casa deve ser modificada para possuir a marcação do jogador, X ou O;
  - Ao clicar em uma casa já marcada, nada deve acontecer;
  - AS casas marcadas não podem ser modificadas;

Teste o comportamento de cada casa, alguns exemplos:

- O símbolo mudar quando clica em uma e depois em outra, mostrando a troca do jogador;
- Casa não pode ser mudada depois de clicada em por algum jogador;

Caso tenha dúvida volte no conteúdo ou olhe na documentação, lembre que abordamos apenas algumas querys, tem outras que podem ser utilizadas.

---

#### Exercício 3 

> Parte 1

Agora você fará uma funcionalidade de acordo com o teste já criado para ela. Fique atento às instruções passadas.

Precisamos saber quando que o jogo acaba! Os testes já foram implementados, mas se roda-los verá que nenhum passa. Essa funcionalidade ainda não está pronta e precisa ser criada.

Crie a aplicação observando os teste, eles te guiarão.

> Parte 2

Nossos testes não cobrem caso de empate ou quem foi o ganhador.

- Crie uma mensagem para ver quem é o vencedor ou quando acontecer o empate.
- Crie os teste para essa nova funcionalidade.
- Adicione um botão para recomeçar o jogo. Crie os teste para ele.
