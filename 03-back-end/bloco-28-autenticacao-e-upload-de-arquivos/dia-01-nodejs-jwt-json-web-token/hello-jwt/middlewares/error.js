module.exports = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }
  res.status(500).json(err);
};
