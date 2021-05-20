const express = require('express');
const rescue = require('express-rescue');
const route = express.Router();
const getFileContent = require('../utils/getFileContent');

route.get('/:name', rescue(async (req, res) => {
  const { name } = req.params;
  const users = await getFileContent('./data/users.json');
  const user = users.find(({ user }) => user === name);
  if (!user) return res.status(404).send('user not found');
  res.status(200).send(user.comments);
}));

module.exports = route;
