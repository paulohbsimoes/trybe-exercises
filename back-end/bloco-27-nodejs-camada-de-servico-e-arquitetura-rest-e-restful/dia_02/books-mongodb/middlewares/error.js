const errors = {
  'invalid_data': 400,
}

module.exports = (err, _req, res, _next) => {
  if (err.err) {
    const { code, message } = err.err;
    const status = errors[code] || 400;
    return res.status(status).json({ message })
  }
  res.status(500).json({ message: 'Algo deu errado' });
}
