const express = require('express');
const JokeController = require('./controllers/JokeController');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/', JokeController.listJokes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
