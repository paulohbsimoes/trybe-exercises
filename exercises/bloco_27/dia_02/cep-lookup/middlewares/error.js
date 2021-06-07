const errors = {
  'invalidData': 400,
  'notFound': 404,
  'alreadyExists': 409
}

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({
      error: {
        code: 'invalidData',
        message: err.details[0].message
      }
    });
  }

  if (err.error) {
    const { code } = err.error;
    const statusCode = errors[code] || 500;
    return res.status(statusCode).json(err);
  }
  
  res.status(500).json({ message: 'Deu ruim' });
}
