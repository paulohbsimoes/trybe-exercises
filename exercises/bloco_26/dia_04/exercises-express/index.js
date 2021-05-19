const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Listening on port 3000`)
});

app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello, ${name}!` })
})
