require('dotenv').config();

const express = require('express');

const app = express();

const users = require('./controllers/users');
const middlewares = require('./middlewares');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/login', users.login);

app.get('/users/me', middlewares.auth, users.me);

app.get('/top-secret', middlewares.auth, middlewares.admin, (_req, res) => {
  res.json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
});

app.use(middlewares.error);

app.listen(PORT, () => `Listening on port ${PORT}`);
