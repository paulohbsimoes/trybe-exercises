const rescue = require('express-rescue');
const { getPosts } = require('../../utils/fsPosts');
const boom = require('@hapi/boom');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const posts = await getPosts();
  const result = posts.find((post) => post.id === Number(id));
  if (!result) throw boom.notFound('id not found');
  res.status(200).json(result);
});
