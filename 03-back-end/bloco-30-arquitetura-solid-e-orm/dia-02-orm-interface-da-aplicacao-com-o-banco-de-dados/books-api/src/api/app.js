const express = require('express');
const routes = require('../routes');
const middlewares = require('../middlewares');

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewares.error);

module.exports = app;
