# Agora, a prática!

O MongoDb possui diversas ferramentas como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

Utilizando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/), construa queries para retornar os seguintes itens:

**Exercício 1**: Retorne o documento com **_id** igual a 8.

```javascript
db.bios.find({ _id: 8 });
```

**Exercício 2**: Retorne o documento com **_id** igual a 8, mas só exiba os campos: **_id** e **name**.

```javascript
db.bios.find({ _id: 8 }, { name: 1 });
```

**Exercício 3**: Retorne apenas os campos **name** e **birth** do documento com **_id** igual a 8.

```javascript
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });
```

**Exercício 4**: Retorne todos os documentos em que o campo **name.first** seja igual a John, utilizando o método **pretty()**.

```javascript
db.bios.find({ "name.first": "John" }).pretty();
```

**Exercício 5**: Retorne os 3 primeiros documentos da coleção **bios** utilizando o método **pretty()**.

```javascript
db.bios.find().limit(3).pretty();
```

**Exercício 6**: Retorne 2 documentos da coleção **bios** pulando os 5 primeiros documentos.

```javascript
db.bios.find().limit(2).skip(5).pretty();
```

Utilizando o [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/), importe o arquivo [books.json](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção **books** para construir queries para as seguintes questões:

```bash
mongoimport --db=meuBanco --collection=books --file=books.json
```

**Exercício 7**: Retorne a quantidade de documentos da coleção **books**.

```javascript
db.books.count();
```

**Exercício 8**: Conte quantos livros existem com o **status "PUBLISH"**.

```javascript
db.books.find({ status: "PUBLISH" }).count();
```

**Exercício 9**: Exiba os campos **title**, **isbn** e **pageCount** dos 3 primeiros livros. NÃO retorne o campo **_id**.

```javascript
db.books.find(null, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);
```

**Exercício 10**: Pule 5 documentos e exiba os campos **_id**, **title**, **authors** e **status** dos livros com **status "MEAP"**, limitando-se a 10 documentos.

```javascript
db.books.find({ status: "MEAP" }, { title: 1, authors: 1, status: 1, _id: 0 }).limit(10).skip(5);
```
