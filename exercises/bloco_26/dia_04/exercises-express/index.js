const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log(`Listening on port 3000`)
});

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});
