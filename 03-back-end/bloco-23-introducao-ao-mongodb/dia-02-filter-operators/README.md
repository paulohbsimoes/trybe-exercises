# Atividades

## Para fixar - Operadores de Comparação

Agora que aprendemos sobre os operadores de comparação, vamos sedimentar esses conhecimentos com alguns exercícios de fixação! Para isso, vamos criar um novo dataset **business** com a collection **restaurants**:

1. Clique neste [link](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/exercise-filter-operators-e8e55183a5af1418a8f0d355ad895d13.js).

2. Copie todo o conteúdo do link e depois abra o Mongo Shell.

3. Utilize o comando **use business** para criar e utilizar este db

4. Cole todo o conteúdo no CLI do Mongo Shell e confirme com ENTER ou baixe o arquivo e o execute usando o comando **mongo exercise-filter-operators.js**.

Para confirmar que está tudo funcionando, rode o seguinte comando:

```javascript
db.restaurants.count()
```

O valor retornado deve ser 60, que é a quantidade de documentos nesta collection. Agora utilize os operadores de comparação para resolver os desafios 1 a 5.

1. Selecione e faça a contagem dos restaurantes presentes nos bairros (campo **borough**) **Queens**, **Staten Island** e **Bronx**.

```javascript
db.restaurants.find({ borough: { $in: ["Queens", "Staten Island", "Bronx"] } }).count();
```

2. Selecione e faça a contagem dos restaurantes que não possuem culinária (campo **cuisine**) do tipo **American**.

```javascript
db.restaurants.find({ cuisine: { $ne: "American" } }).count();
```

3. Selecione e faça a contagem dos restaurantes que possuem avaliação (campo **rating**) **maior ou igual** a **8**.

```javascript
db.restaurants.find({ rating: { $gte: 8 } }).count();
```

4. Selecione e faça a contagem dos restaurantes que possuem avaliação **menor** que **4**.

```javascript
db.restaurants.find({ rating: { $lt: 4 } }).count();
```

5. Selecione e faça a contagem dos restaurantes que não possuem as avaliações **5**, **6** e **7**.

```javascript
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();
```

## Para fixar - Operadores Lógicos

Faça os desafios 1 a 5 abaixo sobre os operadores lógicos utilizando a collection restaurants criada no tópico anterior.

1. Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5, essa query também deve retornar restaurantes que não possuem o campo avaliação.

```javascript
db.restaurants.find({ rating: { $not: { $gt: 5 } } }).pretty();
```

2. Selecione e faça a contagem dos restaurante em que a avaliação seja maior ou igual a 6, ou restaurantes localizados no bairro Brooklyn.

```javascript
db.restaurants.find({ $or: [ { rating: { $gte: 6 } }, { borough: "Brooklyn" } ] }).pretty();
```

3. Selecione e faça a contagem dos restaurantes localizados nos bairros Queens, Staten Island e Brooklyn e possuem avaliação maior que 4.

```javascript
db.restaurants.find({
  $and: [
    { borough: { $in: ["Queens", "Staten Island", "Brooklyn"] } },
    { rating: { $gt: 4 } }
  ]
}).pretty();
```

4. Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1, nem o campo culinária seja do tipo American.

```javascript
db.restaurants.find({ $nor: [{ rating: 1 }, { cuisine: "American" }] }).count();
```

5. Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 e menor que 10, e esteja localizado no bairro Brooklyn ou não possuem culinária do tipo Delicatessen.

```javascript
db.restaurants.find({
  $and: [
    { rating: { $gt: 6, $lt: 10 } },
    { borough: "Brooklyn" },
    { cuisine: { $ne: "Delicatessen" } }
  ]
}).count();
```

## Para fixar - Método Sort()

Faça os desafios 1 e 2 abaixo sobre o sort utilizando a collection **restaurants** criada anteriormente.

1. Ordene alfabeticamente os restaurantes pelo nome (campo **name**).

```javascript
db.restaurants.find().sort({ name: 1 }).pretty();
```

2. Ordene os restaurantes de forma descrescente baseado nas avaliações.

```javascript
db.restaurants.find().sort({ rating: -1 }).pretty().limit(3);
```

## Para fixar - Removendo documentos

Faça os desafios 1 e 2 abaixo sobre remoção de documentos utilizando a collection restaurants criada anteriormente.

1. Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.

```javascript
db.restaurants.deleteOne({ cuisine: { $in: [ "Ice Cream", "Gelato", "Yogurt", "Ices" ] } });
```

2. Remova todos os restaurantes que possuem culinária do tipo American.

```javascript
db.restaurants.deleteMany({ cuisine: "American" });
```

## Exercícios

Antes de iniciar os exercícios

Para os exercícios a seguir, utilizaremos um dataset que contém dados de Super-Heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json).

Após fazer o download do arquivo, importe-o para o **MongoDB** através da ferramenta **mongoimport**. No seu terminal, utilize o seguinte comando (lembre-se de substituir o caminho do arquivo):

```bash
mongoimport --db class --collection superheroes <caminho_do_arquivo>
```

Pronto! Você já tem uma base de dados com 734 super-heróis. Para conferir, conecte-se à instância do seu banco de dados utilizando o **Mongo Shell** e execute os seguintes comandos:

```
use class;

db.superheroes.count();
```

Os documentos têm a seguinte estrutura:

```javascript
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}
```


O MongoDb possui diversas ferramentas, como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

**Exercício 1**: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.

**Exercício 2**: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

```javascript
db.superheroes.find({ "aspects.height": { $lt: 180 } });
```

**Exercício 3**: Retorne o total de super-heróis menores que 1.80m.

```javascript
db.superheroes.find({ "aspects.height": { $lt: 180 } }).count();
```

**Exercício 4**: Retorne o total de super-heróis com até 1.80m.

```javascript
db.superheroes.find({ "aspects.height": { $lte: 180 } }).count();
```

**Exercício 5**: Selecione um super-herói com 2.00m ou mais de altura.

```javascript
db.superheroes.find({ "aspects.height": { $gte: 200 } }).limit(1).pretty();
```

**Exercício 6**: Retorne o total de super-heróis com 2.00m ou mais.

```javascript
db.superheroes.find({ "aspects.height": { $gte: 200 } }).count();
```

**Exercício 7**: Selecione todos os super-heróis que têm olhos verdes.

```javascript
db.superheroes.find({ "aspects.eyeColor": "green" });
```

**Exercício 8**: Retorne o total de super-heróis com olhos azuis.

```javascript
db.superheroes.find({ "aspects.eyeColor": "blue" }).count();
```

**Exercício 9**: Utilizando o operador **$in**, selecione todos os super-heróis com cabelos pretos ou carecas ( **"No Hair"** ).

```javascript
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });
```

**Exercício 10**: Retorne o total de super-heróis com cabelos pretos ou carecas ( **"No Hair"** ).

```javascript
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } }).count();
```

**Exercício 11**: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

```javascript
db.superheroes.find({ "aspects.hairColor": { $nin: [ "Black", "No Hair" ] } }).count();
```

**Exercício 12**: Utilizando o operador **$not**, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

```javascript
db.superheroes.find({ "aspects.height": { $not: { $gt: 180 } } }).count();
```

**Exercício 13**: Selecione todos os super-heróis que **não** sejam **humanos** ou que **não** sejam maiores do que **1.80m**.

```javascript
db.superheroes.find({
  $nor: [
    { "aspects.height": { $gt: 180 } },
    { race: "Human" }
  ]
}).count();
```

**Exercício 14**: Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que **sejam publicados** pela **Marvel Comics**.

```javascript
db.superheroes.find({
  $and: [
    { "aspects.height": { $in: [ 180, 200 ] } },
    { publisher: "Marvel Comics" }
  ]
});
```

**Exercício 15**: Selecione todos os super-heróis que **pesem** entre **80kg** e **100kg**, sejam **Humanos** ou **Mutantes** e **não sejam publicados** pela **DC Comics**.

```javascript
db.superheroes.find({
  "aspects.weight": { $gte: 80, $lte: 100 },
  race: { $in: ["Human", "Mutant"] },
  publisher: { $not: { $eq: "DC Comics" } }
});
```

**Exercício 16**: Retorne o total de documentos que **não** contêm o campo **race**.

```javascript
db.superheroes.find({ race: { $exists: false } }).count();
```

**Exercício 17**: Retorne o total de documentos que **contêm** o campo **hairColor**.

```javascript
db.superheroes.find({ "aspects.hairColor": { $exists: true } }).count();
```

**Exercício 18**: Remova **apenas um** documento publicado pela **Sony Pictures**.

```javascript
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
```

**Exercício 19**: Remova todos os documentos **publicados** pelo **George Lucas**.

```javascript
db.superheroes.deleteMany({ publisher: "George Lucas" });
```
