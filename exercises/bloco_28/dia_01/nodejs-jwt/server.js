const express = require('express');
const api = require('./routes/api');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', api);

app.listen(PORT, () => `Listening on port ${PORT}`);
