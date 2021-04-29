# Agora, a prática!

O MongoDb possui diversas ferramentas como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

Utilizando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/), construa queries para retornar os seguintes itens:

**Exercício 1**: Retorne o documento com **_id** igual a 8.

```javascript
  db.bios.find({ _id: 8 });
```

**Exercício 2**: Retorne o documento com **_id** igual a 8, mas só exiba os campos: **_id** e **name**.

**Exercício 3**: Retorne apenas os campos **name** e **birth** do documento com **_id** igual a 8.

**Exercício 4**: Retorne todos os documentos em que o campo **name.first** seja igual a John, utilizando o método **pretty()**.

**Exercício 5**: Retorne os 3 primeiros documentos da coleção **bios** utilizando o método **pretty()**.

**Exercício 6**: Retorne 2 documentos da coleção **bios** pulando os 5 primeiros documentos.

Utilizando o [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/), importe o arquivo [books.json](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/books-48d15e4d8924badc2308cc4a62eb3ea4.json) para a sua instância local do MongoDB e utilize a coleção **books** para construir queries para as seguintes questões:

**Exercício 7**: Retorne a quantidade de documentos da coleção **books**.

**Exercício 8**: Conte quantos livros existem com o **status "PUBLISH"**.

**Exercício 9**: Exiba os campos **title**, **isbn** e **pageCount** dos 3 primeiros livros. NÃO retorne o campo **_id**.

**Exercício 10**: Pule 5 documentos e exiba os campos **_id**, **title**, **authors** e **status** dos livros com **status "MEAP"**, limitando-se a 10 documentos.

