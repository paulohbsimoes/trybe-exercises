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
