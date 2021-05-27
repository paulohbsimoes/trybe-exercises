const boom = require('@hapi/boom');

module.exports = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;

  if(Number(numero2) === 0) throw boom.badRequest('Não é possível fazer divisão por zero.');

  if(operacao === 'divisao') {
    return res.json({resultado: Number(numero1) / Number(numero2)});
  }

  next();
}
