module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    console.log(err);
    const errorMessages = err.details.map(({ message }) => message).join('\n')
    return res.status(400).send(errorMessages);
  }

  if (err.isBoom) {
    const { statusCode, payload } = err.output;
    return res.status(statusCode).send(payload.message);
  }

  res.status(500).send(err.message);
}
