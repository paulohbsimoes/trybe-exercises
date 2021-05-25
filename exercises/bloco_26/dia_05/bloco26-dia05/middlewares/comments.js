const rescue = require('express-rescue');
const { getUsers } = require('../utils/fsUsers');

module.exports = rescue(async (req, res) => {
  const users = await getUsers();
  const comments = users.map(({ comments }) => comments).flat();
  
  const { filter } = req.query;
  if (!filter) return res.json({ comments });

  const regex = new RegExp(filter, 'i');
  const filteredComments = comments.filter((comment) => regex.test(comment));

  res.json({ comments: filteredComments });
});
