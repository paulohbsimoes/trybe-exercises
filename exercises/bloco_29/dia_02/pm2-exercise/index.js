const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.json({ message: 'Hello world!' }));

app.get('/ping', (_req, res) => res.json({ message: 'PING!' }));

app.get('/error', (_req, _res) => process.exit(1));

app.get('/message', (_req, res) =>
  res.send({ message: process.env.ENVIRONMENT || 'DEFAULT' }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
