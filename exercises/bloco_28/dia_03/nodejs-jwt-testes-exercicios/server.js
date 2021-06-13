const express = require('express');
const api = require('./routes/api');
const middlewares = require('./middlewares');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', api);

app.use(middlewares.error);

app.listen(port, () => console.log(`conectado na porta ${port}`));

module.exports = app;
