const express = require('express');
const router = express.Router();
const validateJWT = require('../middlewares/validateJWT');

const UserController = require('../controllers/User');
const PostController = require('../controllers/Post');
const AuthController = require('../controllers/Auth');

router.get('/posts', validateJWT, PostController.getAll);
router.post('/users', UserController.create);
router.post('/login', AuthController.login);

module.exports = router;
