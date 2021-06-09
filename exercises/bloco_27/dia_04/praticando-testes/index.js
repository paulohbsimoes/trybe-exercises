const express = require('express');
// const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.post('/movies', MovieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
