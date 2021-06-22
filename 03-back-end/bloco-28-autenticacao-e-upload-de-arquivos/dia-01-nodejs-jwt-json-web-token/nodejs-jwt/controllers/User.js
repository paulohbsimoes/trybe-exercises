const UserModel = require('../models/User');

const create = async (req, res, _next) => {
  try {
    const username = await UserModel.create(
      req.body.username,
      req.body.password
    );

    if (!username) throw new Error('Erro ao criar o usuário');

    res
      .status(201)
      .json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};

module.exports = {
  create
}
