Esse projeto é uma API base para ser utilizada na [aula sobre JWT](https://course.betrybe.com/back-end/nodejs/jwt/) do curso de NodeJS da Trybe.

##  Baixando o projeto

No seu terminal, cmd, power shell ou bash execute os seguintes comandos:

- `git clone https://github.com/tryber/nodejs-jwt-base-project.git`
- `cd nodejs-jwt-base-project`
- `npm i`
- `npm run dev`

## Estrutura base do projeto

Abaixo, está a estrutura base do projeto. Ele implementa uma API em NodeJS e Express  que permite criar usuários, listar posts e fazer login. O projeto base contém uma autenticação simples. Durante a aula, é mostrado como adicionar à API autenticação via JWT.
 
```
├── README.md
├── api
│  ├── routes.js
│  └── server.js
├── controllers
│  ├── createUser.js
│  ├── login.js
│  └── posts.js
├── models
│  └── user.js
├── package-lock.json
└── package.json
```

### Modelos

Modelos são responsáveis por fazer o mapeamento entre as entidades que sua aplicação manipula e a camada de dados. Contêm as regras de negócio da sua aplicação e são responsáveis por ler e escrever dados no seu bando de dados.

Estão organizados dentro da pasta `models`. No momento, só há o modelo de usuário (`user.js`), mas poderíamos definir modelos para diversas outras entidades, como posts, comentários etc.

### Controlers

Controllers são as funções utilizadas como callbacks na definição de rotas.
Eles são resposáveis por lidar com as requisições que chegam nas diferentes rotas de sua aplicação, executando regras de negócio e criando a resposta que será enviada para o cliente. Normalmente, interagem com um ou mais modelos para ler/escrever dados do banco de dados.

A API possui três controllers:

  - `createUser.js`: Lida com a criação de novo usuários.
  
  - `login.js`: Responsável pela lógica de login.

  - `posts.js`: Encontra os posts de um usuário.
 
### `api/routes.js`

Esse é um arquivo que concentra os controllers do projeto.
 
### `api/server.js`

Aqui é onde é criado de fato a API com o Express. Também é onde todas as rotas são configuradas.
