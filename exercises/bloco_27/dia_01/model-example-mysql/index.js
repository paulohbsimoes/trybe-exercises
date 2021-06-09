const express = require('express');
const authors = require('./routes/authors');
const books = require('./routes/books');

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.use('/authors', authors);

app.use('/books', books);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
