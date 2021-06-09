## Instruções para realização dos exercícios

Esse exercício vai ser um pouco diferente. Vamos trabalhar com uma técnica de desenvolvimento de software chamada de **refactoring**.

Essa técnica consiste em alterar um pedaço de código que já existe e deixá-lo melhor. É exatamente isso que vamos fazer!

Vamos refatorar uma API que faz gestão de produtos para deixá-la mais elegante e respeitando os padrões impostos pelo REST. Quem sabe até deixá-la **RESTful** ?

### Detalhes do projeto

**1-** Primeiro, crie um novo diretório para nosso projeto;

**2-** Crie um novo projeto:

```bash
npm init -y
```

**3-** Instale o pacote **express**:

```bash
npm install express
```

**4-** Instale o pacote **body-parser** para parsear o corpo das requisições:

```bash
npm install body-parser
```

**5-** Instale o pacote **nodemon** para criar um servidor que se atualize em cada alteração salva nos arquivos:

```bash
npm install nodemon
```

Adicione a linha abaixo no seu package.json, no objeto **"scripts"** para rodar o nodemon com o comando **npm run debug**:

```json
"debug": "nodemon index.js"
```

**6-** Por fim, instale o pacote **mysql2** para conectar com o banco:

```bash
npm install mysql2
```

Se preferir instalar todas as dependecias de uma vez, use o comando abaixo:

```bash
npm install mysql2 nodemon body-parser express
```

**7-** Na raiz do nosso projeto, crie o arquivo **index.js** para configurarmos o express:


```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
```

**8-** Vamos criar uma conexão com o **mysql**, crie uma pasta **models** e um arquivo **connection.js**:

```javascript
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'root', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'senha123', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios'});

module.exports = connection;
```

Ainda na pasta **models**, dentro dela, crie o arquivo **productModel.js**. Dentro desse arquivo, vamos ter um CRUD completo utilizando uma conexão com o MySQL:

```javascript
const connection = require('./connection');

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result.length) return null
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
```

**9-** Execute esse script para subir o banco do exercício:

```sql
DROP DATABASE IF EXISTS rest_exercicios;
CREATE DATABASE IF NOT EXISTS rest_exercicios;
USE rest_exercicios;

CREATE TABLE IF NOT EXISTS products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL
);

INSERT INTO products (name, brand)
VALUES ('Cerveja Skol', 'Ambev'),
       ('Monitor AGON', 'AOC'),
       ('MacBook Air', 'Apple');
SELECT * FROM products;
```

**10-** Por último, vamos criar uma pasta **controllers** e, dentro dela, o arquivo **productController.js**. Esse será o local onde utilizaremos a técnica de refactoring:

```javascript
const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.send(products);
});

router.get('/get-by-id/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.send(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
});

router.post('/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.send(products);
});

router.post('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;
```

## Agora é sua vez!

**1-** Pense qual é o recurso que estamos trabalhando e altere os endpoints para que fiquem padronizados.

**2-** Padronize todos os retornos para JSON.

**3-** Utilize os verbos (POST, PUT, GET etc.) corretos para cada ação do CRUD.

**4-** Garanta que todos os endpoints tenham as respostas (status code) corretas, ou seja, código para quando der tudo certo, código pra quando ocorrer erro etc.

**Dica:** Para testar suas requisições você pode utilizar o [Postman](https://www.postman.com/).

## Bônus

**1-** Refatore a API para que utilize MongoDB como banco de dados.
