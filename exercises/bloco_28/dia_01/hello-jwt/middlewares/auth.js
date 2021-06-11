const jwt = require('jsonwebtoken');
const createError = require('../utils/createError');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json(createError('Token not found'));

  let payload;
  try {
    payload = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(401).json(createError(error.message));
  }

  const { username, admin } = payload;

  req.user = { username, admin };
  
  next();
};
