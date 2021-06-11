require('dotenv').config();
const joi = require('joi');
const jwt = require('jsonwebtoken');

const loginSchema = joi.object({
  username: joi.string().min(5).required(),
  password: joi.string().min(5).required(),
});

const login = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return next(error);

  const { username, password } = req.body;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  
  const isAdmin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = jwt.sign(
    { username, password, admin: isAdmin },
    process.env.SECRET,
    jwtConfig,
  );

  res.json({ token });
};

const me = (req, res) => {
  res.json(req.user);
};

module.exports = {
  login,
  me,
};
