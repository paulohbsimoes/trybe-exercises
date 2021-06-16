require('dotenv').config();

const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res
    .status(400)
    .json({ message: 'Usuário e senha são obrigatórios'});

  const user = await UserModel.registerUser(
    req.body.username,
    req.body.password
  );

  if (!user) return res
    .status(400)
    .json({ message: 'Erro ao salvar o usuário no banco' });

  res
    .status(201)
    .json({ message: 'Novo usuário criado com sucesso', user: username });
};

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res
    .status(401)
    .json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await UserModel.findUser(username);

  if (!user || user.password !== password) return res
    .status(401)
    .json({ message: 'Usuário não existe ou senha inválida' });

  const jwtConfig = {
    expiresIn: '1h'
  }

  const token = jwt.sign({ username, password }, process.env.SECRET, jwtConfig);

  return res
    .status(200)
    .json({ token });
};

const getAll = async (req, res) => {
  const users = await UserModel.getAll();
  res.json({ users });
}

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await UserModel.getById(id);

  if (!result) return next(new Error('Usuário não encontrado'));

  const { username, password } = req.user;

  if (username !== result.username || password !== result.password) {
    return res.status(401).json({ message: 'Acesso negado' });
  }

  res.json(result);
};

module.exports = {
  registerUser,
  login,
  getAll,
  getById
}
