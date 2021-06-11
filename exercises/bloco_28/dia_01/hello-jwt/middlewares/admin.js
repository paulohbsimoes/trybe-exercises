const createError = require('../utils/createError');

module.exports = (req, res, next) => {
  const { admin } = req.user;

  if (!admin) res.status(401).json(createError('Restricted access'));

  next();
};
