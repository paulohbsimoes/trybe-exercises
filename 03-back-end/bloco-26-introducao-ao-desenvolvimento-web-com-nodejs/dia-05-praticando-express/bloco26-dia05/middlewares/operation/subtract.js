module.exports = (req, res, next) => {
  const { operacao, numero1, numero2 } = req.params;
  if(operacao === 'subtracao') return res.json({resultado: Number(numero1) - Number(numero2)});
  next();
}
