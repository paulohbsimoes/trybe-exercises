const PostsModel = require('../models/Post');

const getAll = async (req, res, _next) => {
  console.log(req.user);
  const result = await PostsModel.getAll();
  res.status(200).json(result);
};

module.exports = {
  getAll
}
