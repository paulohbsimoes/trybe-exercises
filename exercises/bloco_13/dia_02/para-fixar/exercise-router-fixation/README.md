Esse é um projeto para o conteúdo de `React Router Dom`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:

git branch

Mude para a branch fixation-exercises com o comando git checkout -b fixation-exercises. É nessa branch que você realizará a solução para o exercício.

Observe o que deve ser feito nas instruções.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/fixation-exercises`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Nesse repositório ja foi instalado o `react-router-dom`, só é necessário executar `npm install` uma vez dentro da pasta raiz para utilizá-lo.

#### Exercício 1

Torne a aplicação navegável, encapsulando o que é retornado pelo `App` dentro do componente `BrowserRouter`.

#### Exercício 2

Agora, adicione dentro de `BrowserRouter` uma lista contendo 3 links:

  * um link que aponte para o caminho de _URL_ "/" contendo o texto `Home`;

  * um link que aponte para o caminho de _URL_ "/about" contendo o texto `About`;

  * um link que aponte para o caminho de _URL_ "/users" contendo o texto `Users`.

    *OBS*: averigue que os links estão atualizando a _URL_ do seu browser quando são clicados.

#### Exercício 3

Substitua o componente `Home` por um `Route` que mapeia o caminho de _URL_ "/" para `Home`.

#### Exercício 4

Adicione uma rota que mapeie o caminho de _URL_ "/about" para o componente `About`. Acesse `http://localhost:3000/about` para ver se o componente `About` foi renderizado!

#### Exercício 5

Legal, o componente `About` foi renderizado, mas o componente `Home` foi também, o que não era desejado para o nosso caso. 😭 Altere a forma como a correspondência de caminho da _URL_ está sendo feita para renderizar `Home`, de modo que `Home` **somente** seja renderizado se o caminho da _URL_ for **exatamente** igual a "/".

#### Exercício 6

Por fim, adicione uma rota que mapeie o caminho de _URL_ "/users" para o componente `Users`. Acesse `http://localhost:3000/users` para ver se **somente** o componente `Users` foi renderizado.

#### Exercício 7

Altere o componente `Users` criado acima no projeto `fixation-exercises`, para poder fazer o exercício a seguir.

```js
// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage = 'Hi There' }) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
  </div>
);

export default Users;

```

#### Exercício 8

No componente `App` há uma rota que renderiza o componente `Users`. Altere a forma como ela renderiza o componente `Users`, passando para ele a prop `greetingMessage` com o valor igual a "Good Morning". Lembre-se de usar a prop correta no `Route`!

#### Exercício 9

Agora, para fixar uso de _URL_ com parâmetros, altere a rota, definindo o parâmetro chamado `id`. Depois, altere o componente `Users`, de modo que mostre no parágrafo o valor recebido para o parâmetro `id`. Teste se está funcionando invocando as urls `localhost:3000/users/10`, `localhost:3000/users/11` e `localhost:3000/users/100`, por exemplo.

Daqui para frente, utilize o componente `Switch`:

#### Exercício 10

No componente `App` do projeto `fixation-exercises`, você deve possuir 3 rotas: uma para renderizar o componente `Home`, outra para renderizar `About`, e outra para renderizar `Users`, sendo que a última faz uso de parâmetro de _URL_. Encapsule essas 3 rotas em um componente `Switch` e ordene as rotas do mais específico para o mais genérico, começando de cima.

Para os próximos exercícios, utilize o componente `Redirect`:

#### Exercício 11

Adicione, no diretório `src` do projeto `fixation-exercises`, um componente chamado `StrictAccess`. Como o próprio nome diz, esse componente é de acesso restrito, e ele deve receber um objeto `user` como props. Se `username` e `password` de `user` for "joao" e "1234", respectivamente, o componente `StrictAccess` renderiza um parágrafo que diz "Welcome joao!". Caso `username` ou `password` não sejam os valores esperados, o componente precisa gerar um alerta dizendo `Access denied` e redirecionar quem usa sua aplicação para a página principal.

#### Exercício 12

Adicione no componente `App` um link que aponte para o caminho de _URL_ "/strict-access" contendo o texto `Strict Access`;

#### Exercício 13

Adicione no componente `App` uma rota que mapeie o caminho de _URL_ "/strict-access" para o componente `StrictAccess`. Para poder testar o fluxo de autenticação, passe para a prop `user` de `StrictAccess` diferentes valores para as propriedades `username` e `password`.
