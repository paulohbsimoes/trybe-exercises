const CepSchema = require('../schema/Cep');

module.exports = (req, _res, next) => {
  const { error } = CepSchema.validate(req.body);

  if (error) return next(error);

  next();
}
