module.exports = (err, _req, res, _next) => {
  if (err.error) {
    const { statusCode, message } = err.error;
    return res.status(statusCode).json({ message });
  }
  res.status(500).json({ message: err.message });
}
