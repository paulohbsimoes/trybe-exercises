const ProfileService = require('../services/Profile');
const createError = require('../utils/createError');

const create = async (req, res) => {
  const { name , email , password, bio } = req.body;
  const { filename } = req.file;

  const result = await ProfileService.create({
    id: filename,
    name,
    email,
    password,
    bio
  });

  res.json(result);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await ProfileService.getById(id);

  if (!result) return res.json(createError('Perfil não encontrado'));

  res.json(result);
}

const getAll = async (req, res) => {
  const result = await ProfileService.getAll();
  res.json(result);
}

module.exports = {
  create,
  getById,
  getAll
}
