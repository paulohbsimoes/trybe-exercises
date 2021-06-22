require('dotenv').config();

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res
      .status(401)
      .json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await User.getByUsername(username);

    if (!user || user.password !== password) return res
      .status(401)
      .json({ message: 'Usuário não existe ou senha inválida' });

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, process.env.SECRET_KEY, jwtConfig);

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Erro interno', error });
  }
};

module.exports = {
  login
}
