const express = require('express');
const route = express.Router();
const User = require('../models/User');

route.post('/', async (req, res) => {
  const { error } = User.isValid(req.body);

  if (error) {
    return res.status(400).json({
      "error": true,
      "message": error
    })
  }

  const newUser = await User.addUser(req.body);

  res.json(newUser);
})

module.exports = route;
