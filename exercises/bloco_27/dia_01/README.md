# Atividades

Atividades realizadas em dupla com [Rosiele](https://github.com/rosids). :clap:

## Vamos praticar - Model com MySQL

Vamos colocar em prática tudo o que aprendemos até aqui. Primeiro, cria a tabela **Books** usando o SQL abaixo

```sql
CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(90) NOT NULL,
  author_id INT(11) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (author_id) REFERENCES authors (id)
);

INSERT INTO books (title, author_id)
VALUES
  ('A Game of Thrones', 1),
  ('A Clash of Kings', 1),
  ('A Storm of Swords', 1),
  ('The Lord of The Rings - The Fellowship of the Ring', 2),
  ('The Lord of The Rings - The Two Towers', 2),
  ('The Lord of The Rings - The Return of The King', 2),
  ('Foundation', 3);
```

Depois de criar a tabela no banco de dados, faça as seguintes implementações.

**1-** Crie um modelo **Book** e defina o método **getAll** para retornar a lista de todos os livros.

**2-** Crie uma rota **/books** para trazer a lista de todos os livros.

**3-** Crie um método **getByAuthorId** no modelo **Book**, para retornar apenas livros associados com um determinado **author_id**. E altere o middleware da rota **books** criado no passo 2 para receber uma query string com a chave **author_id**, e retornar apenas os livros associados.

**4-** Crie uma rota **/books/:id** e retorne o livro de acordo com o id passado por parâmetro. Se não existir retorne um json no seguinte formato **{ message: 'Not found' }**.

**5-** Ainda usando a tabela books como referência crie uma rota **books** do tipo **POST**. Faça as seguintes validações:

* Título não pode ser vazio;

* Título precisa ter pelo menos três caracteres;

* O campo **author_id** não pode ser vazio;

* O campo **author_id** só é válido se existir um autor com esse id;

Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato **{ message: 'Dados inválidos' }** com **status 400**. Caso contrário, insira o livro na tabela books e retorne o json **{ message: 'Livro criado com sucesso! '}** com o **status 201**.

## Vamos praticar - Model com MongoDB

Vamos aplicar as alterações do nosso modelo **Book** , primeiro vamos criar e popular uma coleção com a mesma lista de livros que salvamos no mysql.

```javascript
db.books.insertMany([
  { title: 'A Game of Thrones', author_id: 1 },
  { title: 'A Clash of Kings', author_id: 1 },
  { title: 'A Storm of Swords', author_id: 1 },
  { title: 'The Lord of The Rings - The Fellowship of the Ring', author_id: 2 },
  { title: 'The Lord of The Rings - The Two Towers', author_id: 2 },
  { title: 'The Lord of The Rings - The Return of The King', author_id: 2 },
  { title: 'Foundation', author_id: 3 },
]);
```

**1-** Refatore o método **getAll** de **models/Book** para utilizar o mongo como banco de dados.

**2-** Refatore o método **getByAuthorId** de **models/Book** para utilizar o mongo como banco de dados.

**3-** Refatore o método **getById** de **models/Book** para utilizar o mongo como banco de dados.

**4-** Refatore o método **create** de **models/Book** para utilizar o mongo como banco de dados.

## Exercícios

> Você criará uma aplicação que faz CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de usuários. A entidade que representa um usuário se chamará `user`.

Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o **MongoDB**.

Com isso em mente, prossiga para a realização dos exercícios:

**1-** Crie o endpoint `POST /user`

* Seu endpoint deve receber o seguinte conteúdo no body da request:

```json
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}
```
* Todos os campos são obrigatórios;

* O campo ***password*** deve ser uma string de 6 ou mais caracteres;

* Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```json
{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```

* Caso o usuário seja criado com sucesso, retorne os campos ***id***(e não ***_id***), ***firstName***, ***lastName*** e ***email*** em JSON, no formato abaixo, com o status **201 Created**.

```json
{
  "id": "1837983326d5cd7ad6da5707a2bd11c5",
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
```

O campo ***_id*** deve ser renomeado para ***id***, pois a nomenclatura ***_id*** trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.

---

**2-** Crie o endpoint `GET /user`

* O endpoint sempre deve retornar um array;

* Quando não houver nenhum usuário cadastrado, retorne um array vazio;

* Deve sempre retornar o status **200 OK**.

---

**3-** Crie o endpoint `GET /user/:id`

* O endpoint deve retornar o usuário cujo ***id*** seja igual ao parâmetro ***id*** informado na URL. O status deve ser **200 OK**.

* Caso um usuário com o ***id*** informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status **404 Not Found**.

```json
{
  "error": true,
  "message": "Usuário não encontrado"
}
```

---

**4-** Crie o endpoint `PUT /user/:id`

* O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:

```json
{
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com",
  "password": "d496d5ea2442"
}
```

* Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:

```json
{
  "error": true,
  "message": "O campo 'password' deve ter pelo menos 6 caracteres"
}
```

* Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo ***id*** foi especificado na URL.

* Depois de alterar os dados do usuário no banco, retorne os novos dados com o status **200 OK**, no seguinte formato:

```json
{
  "id": "1837983326d5cd7ad6da5707a2bd11c5",
  "firstName": "Calebe",
  "lastName": "Junior",
  "email": "calebe.junior@gmail.com"
}
```

* Caso o usuário em questão não exista, retorne o status **404 Not Found** e os seguintes dados em JSON no corpo da resposta:

```json
{
  "error": true,
  "message": "Usuário não encontrado"
}
```

## Bônus

Refatore a camada de model da aplicação criada nos exercícios anteriores para acessar o **MySQL** ao invés do **MongoDB**.

Utilize o script SQL abaixo para criar o banco e a tabela que você precisará utilizar para realizar essa refatoração.

```sql
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
```

> Pode ser interessante fazer um cópia da aplicação que desenvolveu anteriormente, assim você terá os dois códigos para consultar posteriormente.
