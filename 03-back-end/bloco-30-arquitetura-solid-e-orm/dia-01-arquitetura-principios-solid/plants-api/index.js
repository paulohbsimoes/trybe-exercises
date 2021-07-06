const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewares.error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
