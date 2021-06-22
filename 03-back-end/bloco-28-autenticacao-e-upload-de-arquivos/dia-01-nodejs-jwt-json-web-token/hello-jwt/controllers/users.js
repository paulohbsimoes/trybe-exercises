require('dotenv').config();

const jwt = require('jsonwebtoken');
const createError = require('../utils/createError');
const loginSchema = require('../schema/login');
const usersModel = require('../model/users');

const login = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const user = await usersModel.getByUsername(username);
  
  if (!user) return res.status(400).json(createError('user dont exist'));

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  
  // const isAdmin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = jwt.sign(
    { username, password, admin: user.admin },
    process.env.SECRET,
    jwtConfig,
  );

  res.json({ token });
};

const me = (req, res) => {
  res.json(req.user);
};

const signup = async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return next(error);

  const users = await usersModel.getUsers();

  const { username, password } = req.body;

  if (users.some((user) => user.username === username)) {
    return res.status(409).json(createError('user already exists'));
  }
  
  const isAdmin = Math.random() < 0.5;
  
  await usersModel.create({ username, password, admin: isAdmin });

  next();
};

module.exports = {
  login,
  me,
  signup,
};
