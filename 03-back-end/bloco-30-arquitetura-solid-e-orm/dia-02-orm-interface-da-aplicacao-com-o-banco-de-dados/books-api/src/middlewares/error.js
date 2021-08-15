module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }
  return res.status(500).json({ message: 'Algo deu errado' });
};
