const express = require('express');
const route = express.Router();
const User = require('../models/User');

route.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { error } = User.isValid({
    firstName,
    lastName,
    email,
    password
  });

  if (error) {
    return res.status(400).json({
      "error": true,
      "message": error
    });
  }

  const newUser = await User.addUser(req.body);

  res.status(201).json(newUser);
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
  const { firstName, lastName, email, password } = req.body;

  const { error } = User.isValid({ firstName, lastName, email, password });

  if (error) {
    return res.status(400).json({
      "error": true,
      "message": error
    });
  }

  const { id } = req.params;
  const updatedUser = await User.editUser(id, { firstName, lastName, email, password });

  if (!updatedUser) {
    return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    })
  }

  res.status(200).json(updatedUser);
});

module.exports = route;
