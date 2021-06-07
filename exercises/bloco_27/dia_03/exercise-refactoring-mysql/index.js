const express = require('express');

const products = require('./routes/products');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', products);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
