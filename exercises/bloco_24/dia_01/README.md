# Exercícios

Para os exercícios, você utilizará um dataset pequeno com alguns filmes.

Conecte-se à sua instância do **MongoDB** local e insira os seguintes documentos na coleção **movies** do banco de dados **class**:

```javascript
{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}
```
Resposta:

```javascript
use class;
db.movies.insertMany([{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}]);
```

Verifique se você tem três documentos na coleção.

Para cada execução, utilize o método **find()** para conferir as alterações nos documentos

O MongoDb possui diversas ferramentas, como, por exemplo, **mongo**, **mongosh**, **Compass** e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as queries, o importante é realizá-las.

1. Altere o **imdbRating** para **7.7** no filme **Batman**.

```javascript
db.movies.updateOne({ title: 'Batman' }, { $set: { imdbRating: 7.7 } });
```

2. Altere **budget** para **1** no filme **Godzilla**.

```javascript
db.movies.updateOne({ title: 'Godzilla' }, { $set: { budget: 1 } });
```

3. Altere **budget** para **15** e **imdbRating** para **5.5** no filme **Home Alone**.

```javascript
db.movies.updateOne(
  { title: 'Home Alone' },
  { $set: { budget: 15, imdbRating: 5.5 } }
);
```

4. Aumente em **2** o **imdbRating** do filme **Batman**.

```javascript
db.movies.updateOne({ title: 'Batman' }, { $inc: { imdbRating: 2 } });
```

5. Aumente em **5** o **budget** do filme **Home Alone**.

```javascript
db.movies.updateOne({ title: 'Home Alone' }, { $inc: { budget: 5 } });
```

6. Multiplique por **4** o **imdbRating** do filme **Batman**.

```javascript
db.movies.updateOne({ title: 'Batman' }, { $mul: { imdbRating: 4 } });
```

7. Renomeie o campo **budget** para **estimatedBudget** do filme **Batman**.

```javascript
db.movies.updateOne(
  { title: 'Batman' },
  { $rename: { budget: 'estimatedBudget' } }
);
```

8. Utilize o operador **$min** para alterar o **budget** para **5** do filme **Home Alone**.

```javascript
db.movies.updateOne(
  { title: 'Home Alone' },
  { $max: { min: 5 } }
);
```

9. Utilize o operador **$max** para alterar o **imdbRating** para **8.6** do filme **Godzilla**. Além disso, altere a categoria **"adventure"** para **"thriller"** do filme **Godzilla**.

```javascript
db.movies.updateOne(
  { title: 'Godzilla' },
  { $max: { imdbRating: 8.6 }, $set: { adventure: 'thriller' } }
);
```

10. Utilizando o operador **$currentDate**, crie um campo chamado **lastUpdated** com o tipo **timestamp** no filme **Home Alone**.

```javascript
db.movies.updateOne(
  { title: 'Home Alone' },
  { $currentDate: { lastUpdated: { $type: 'timestamp' } } }
);
```

11. Utilizando uma única operação, crie um campo chamado **sequels** e atribua a ele o valor **0** em todos os documentos.

```javascript
db.movies.updateMany({}, { $set: { sequels: 0 } });
```

12. Utilizando uma única operação, remova os campos **budget** e **estimatedBudget** em todos os documentos.

```javascript
db.movies.updateMany({}, { $unset: { budget: '', estimatedBudget: '' } });
```

13. Para os filmes **Batman** ou **Home Alone**, atribua a **imdbRating** o valor **17**, caso o valor de **imdbRating** seja menor que **17**.

```javascript
db.movies.updateMany(
  { title: { $in: ['Batman', 'Home Alone'] } },
  { $max: { imdbRating: 17 } }
);
```
