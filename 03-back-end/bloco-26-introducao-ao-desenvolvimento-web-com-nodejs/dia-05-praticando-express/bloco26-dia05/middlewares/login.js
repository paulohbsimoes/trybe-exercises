const crypto = require('crypto');
const loginSchema = require('../schema/login');

module.exports = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  console.log(error);

  if (error) return next(error);

  res.send({ token: crypto.randomBytes(6).toString('hex') });
}
