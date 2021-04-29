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

# Para fixar - Operadores Lógicos

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

# Para fixar - Método Sort()

Faça os desafios 1 e 2 abaixo sobre o sort utilizando a collection **restaurants** criada anteriormente.

1. Ordene alfabeticamente os restaurantes pelo nome (campo **name**).

```javascript
db.restaurants.find().sort({ name: 1 }).pretty();
```

2. Ordene os restaurantes de forma descrescente baseado nas avaliações.

```javascript
db.restaurants.find().sort({ rating: -1 }).pretty().limit(3);
```

# Para fixar - Removendo documentos

Faça os desafios 1 e 2 abaixo sobre remoção de documentos utilizando a collection restaurants criada anteriormente.

1. Remova o primeiro restaurante que possua culinária do tipo Ice Cream, Gelato, Yogurt, Ices.

```javascript
db.restaurants.deleteOne({ cuisine: { $in: [ "Ice Cream", "Gelato", "Yogurt", "Ices" ] } });
```

2. Remova todos os restaurantes que possuem culinária do tipo American.

```javascript
db.restaurants.deleteMany({ cuisine: "American" });
```
