const express = require('express');
const users = require('./routes/user');
const app = express();
const middlewares = require('./middlewares');

app.use('/user', users);

app.use(middlewares.handleErrorMiddleware);

app.listen(3000, () => {
  console.log(`Serviço rodando na porta 3000`);
})
