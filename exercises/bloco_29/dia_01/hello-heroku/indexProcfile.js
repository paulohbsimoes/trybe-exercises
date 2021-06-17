const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => res.json({ message: 'Hello Procfile' }));

app.get('/ping', (_req, res) => res.json({ message: 'Pong!' }));

app.get('/environment', (_req, res) => 
  res.json({ message: process.env.ENVIRONMENT || "Default" }));

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
