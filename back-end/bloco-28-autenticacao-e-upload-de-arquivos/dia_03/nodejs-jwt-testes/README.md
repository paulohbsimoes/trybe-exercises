Esse projeto é uma API base para ser utilizada na aula `Testando APIs com Testes de Integração` do curso de NodeJS da Trybe.

##  Baixando o projeto

No seu terminal, cmd, power shell ou bash execute os seguintes comandos:

- `git clone https://github.com/tryber/nodejs-jwt-base-project.git`
- `cd nodejs-jwt-base-project`
- `git checkout block-28-3`
- `npm i`
- `npm run test:coverage`

## Estrutura base do projeto

Abaixo, está a estrutura base do projeto. Ele implementa uma API em NodeJS e Express  que permite criar usuários, listar posts e fazer login. Aqui, é possível realizar o teste de integração do projeto.
 
```
├── README.md
├── src
│   ├── api
│   │   ├── app.js
│   │   ├── routes.js
│   │   └── server.js
│   ├── controllers
│   │   ├── createUser.js
│   │   ├── login.js
│   │   └── posts.js
│   └── models
│       ├── connection.js
│       └── user.js
└── tests
│   └── createUsers.test.js
├── package-lock.json
└── package.json
```

### Modelos

Modelos são responsáveis por fazer o mapeamento entre as entidades que sua aplicação manipula e a camada de dados. Contêm as regras de negócio da sua aplicação e são responsáveis por ler e escrever dados no seu bando de dados.

Estão organizados dentro da pasta `models`. No momento, só há o modelo de usuário (`user.js`), mas poderíamos definir modelos para diversas outras entidades, como posts, comentários etc.

### Controllers

Controllers são as funções utilizadas como callbacks na definição de rotas.
Eles são responsáveis por lidar com as requisições que chegam nas diferentes rotas de sua aplicação, executando regras de negócio e criando a resposta que será enviada para o cliente. Normalmente, interagem com um ou mais modelos para ler/escrever dados do banco de dados.

A API possui três controllers:

  - `createUser.js`: Lida com a criação de novo usuários.
  
  - `login.js`: Responsável pela lógica de login.

  - `posts.js`: Encontra os posts de um usuário.
 
### `api/routes.js`

Esse é um arquivo que concentra os controllers do projeto.

### `api/app.js`

Onde todas as rotas são configuradas. 

### `api/server.js`

Aqui é onde é criado o server com o Express.
