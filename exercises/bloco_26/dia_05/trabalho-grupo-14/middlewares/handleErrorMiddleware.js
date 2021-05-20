module.exports = (err, _req, res, _next) => {
  if (!err.status) return res.status(500).send(err.message);
  res.status(err.status).send(err.message);
}
