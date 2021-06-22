require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./routes/user');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', user);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
