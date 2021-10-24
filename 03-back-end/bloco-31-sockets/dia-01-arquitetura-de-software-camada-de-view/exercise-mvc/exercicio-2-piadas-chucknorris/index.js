const express = require('express');
const JokeController = require('./controllers/JokeController')

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/jokes/categories', JokeController.getCategories);

app.get('/jokes/:category', JokeController.getRandomJokeByCategory);

app.get('/jokes', JokeController.getRandomJoke);

app.get('/', (_req, res) => res.redirect('/jokes/categories'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
