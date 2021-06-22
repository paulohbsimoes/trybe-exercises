const express = require('express');
const router = express.Router();
const middlewares = require('../middlewares');

const user = require('../controllers/user');
const posts = require('../controllers/posts');

router.get('/posts', posts.getPosts);
router.get('/users/:id', middlewares.auth, user.getById);
router.get('/users', user.getAll);
router.post('/users', user.registerUser);
router.post('/login', user.login);

module.exports = router;
