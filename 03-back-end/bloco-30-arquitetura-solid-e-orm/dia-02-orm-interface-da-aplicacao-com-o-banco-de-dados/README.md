## Exercícios

Neste exercício vamos criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar MySQL como banco de dados e Sequelize como nosso ORM.

### Detalhes do projeto

**1 -** Crie uma nova pasta e inicie um projeto com Express:

```bash
npm init -y
npm install express body-parser
```

**2 -** Crie o arquivo **index.js**;

**3 -** Instale o pacote **sequelize** e o **mysql2**:

```bash
npm install sequelize mysql2
```

**4 -** Instale o pacote **sequelize-cli** como uma dependência de desenvolvimento:

```bash
npm install --save-dev sequelize-cli
```

**5 -** Use o **Sequelize-CLI** para iniciar a configuração do ORM:

```bash
npx sequelize-cli init
```

Esse comando irá gerar as pastas **models**, **seeder**, **config** e **migration** dentro do seu projeto.

**6 -** Agora, aproveitando a CLI, vamos criar nossa primeira **migration** para **books** usando:

```bash
npx sequelize migration:generate --name create-books
```

**7 -** Dentro do **up**, crie uma tabela **Books** com os atributos: **id** (nossa chave primária), **title** (string e não pode ser nulo), **author** (string e não pode ser nulo), **pageQuantity** (integer e pode ser nulo) e **createdAt** (date e não pode ser nulo).

**8 -** Dentro do **down**, remova a tabela **Books**.

**9 -** Crie seu banco de dados e coloque todas as configurações dentro do arquivo **config/config.js**.

**10 -** Agora você pode rodar as migrations (seu banco precisa estar configurado certinho para isso funcionar):

```bash
npx sequelize db:migrate
```

**11 -** Crie um arquivo **Book.js** dentro da pasta **models** e crie seu modelo lá dentro, respeitando os atributos que definimos nas migrations.

**Dica -** Preste atenção em como o arquivo **models/index.js** é definido, ele vai te ajudar a importar seus modelos mais facilmente.

## Agora é sua vez!

**Exercício:** Crie os controllers do seu projeto com as seguintes rotas:

* **GET /books** - lista todos os livros;
* **GET /book/:id** - pega o livro com o id especificado;
* **POST /book** - cria um novo livro;
* **POST /book/:id** - sobrescreve o livro com ID selecionado;
* **DELETE /book/:id** - deleta um livro;
* Em caso de erro, os endpoints devem retornar status code **500** com a mensagem: 'Algo deu errado'.

**Dica:** Para testar suas requisições você pode utilizar o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/).

## Bônus

* Crie um **seeder** usando o **Sequelize-CLI**, populando a sua base com pelo menos um livro;
* Crie um endpoint para buscar o livro por **author** (pode adaptar algum que já exista);
* Crie uma ordenação no endpoint **GET /books** para ordenar por ordem alfabética e por data de criação;
* Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.
* Escreva testes para os **models** criados;
* Escreva testes para os **controllers** do seu projeto isolando a camada de **models**.
