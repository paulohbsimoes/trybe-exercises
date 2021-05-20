const fs = require('fs/promises');
const rescue = require('express-rescue');
const express = require('express');
const app = express();

app.use(express.json());

const handleErrorsMiddleware = (err, req, res, next) => {
  res.status(500).send(err.message);
  next();
}

const routeWithAuthentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) res.status(401).send({ message: 'Token inválido!' });
  next();
}

app.use(routeWithAuthentication);

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

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age <= 17) return res.status(401).send({ message: 'Unauthorized' });
  res.status(200).send({ message: `Hello, ${name}!` } )
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.get('/simpsons', rescue(async (_req, res) => {
  const content = await fs.readFile('./simpsons.json', 'utf-8');
  const result = JSON.parse(content);
  res.send(result);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(data);
  const result = content.find((character) => character.id === id);
  if (!result) res.status(404).send({ message: 'simpson not found' });
  res.status(200).send(result);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const content = JSON.parse(data);
  const isIdUsed = content.some((character) => character.id === id);
  if (isIdUsed) return res.status(409).send({ message: 'id already exists' });
  content.push({ id, name });
  await fs.writeFile('./simpsons.json', JSON.stringify(content, null, 2));
  res.send(204).exit();
}));

app.post('/post', rescue((req, res) => {

}))

app.use(handleErrorsMiddleware);
