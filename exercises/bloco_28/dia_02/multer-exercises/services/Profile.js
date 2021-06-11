const ProfileModel = require('../models/Profile');

const create = ({ id, name , email , password, bio }) => 
  ProfileModel.create({ id, name , email , password, bio });

const getById = (id) => ProfileModel.getById(id);

const getAll = () => ProfileModel.getAll();

module.exports = {
  create,
  getById,
  getAll
}
