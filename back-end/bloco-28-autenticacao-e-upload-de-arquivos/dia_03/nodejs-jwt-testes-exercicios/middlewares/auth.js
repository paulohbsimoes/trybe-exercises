const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(404).json({ message: 'Token não encontrado ou informado' });

  let payload;
  try {
    payload = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' })
  }

  const { username, password } = payload;

  req.user = { username, password };

  next();
}
