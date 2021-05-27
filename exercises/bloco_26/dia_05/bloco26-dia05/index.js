const express = require('express');
const app = express();
const users = require('./routes/user');
const posts = require('./routes/posts');
const recipe = require('./routes/recipe')
const users2 = require('./routes/user2');
const middlewares = require('./middlewares');

app.use(express.json());

app.use('/user2', users2);

app.use('/user', users);

app.use('/posts', posts);

app.use('/recipe', recipe);

app.get('/comments', middlewares.comments);

app.post('/login', middlewares.login);

app.get('/btc/price', middlewares.auth, middlewares.btcPrice);

app.get('/:operacao/:numero1/:numero2', [
  middlewares.operation.sum,
  middlewares.operation.subtract,
  middlewares.operation.divide,
  middlewares.operation.multiply
]);

app.use(middlewares.error);

app.listen(3000, () => {
  console.log(`Serviço rodando na porta 3000`);
})
