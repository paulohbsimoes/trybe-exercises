const express = require('express');
const route = express.Router();
const User = require('../models/User');

route.post('/', async (req, res) => {
  const { error } = User.isValid(req.body);

  if (error) {
    return res.status(400).json({
      "error": true,
      "message": error
    });
  }

  const newUser = await User.addUser(req.body);

  res.json(newUser);
});

route.get('/', async (_req, res) => {
  const users = await User.getUsers();
  res.status(200).json(users);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.getUserById(id);

  if(!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  res.status(200).json(user);
});

route.put('/:id', async (req, res) => {
  const { error } = User.isValid(req.body);

  if (error) {
    return res.status(400).json({
      "error": true,
      "message": error
    });
  }

  const { id } = req.params;
  const updatedUser = await User.editUser(id, req.body);

  if (!updatedUser) {
    res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    })
  }

  res.status(200).json(updatedUser);
});

module.exports = route;
