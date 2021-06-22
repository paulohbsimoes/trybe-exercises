const multer = require('multer');
const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/Profile');

router.get('/', ProfileController.getAll);

const profilePics = multer({ dest: 'profilePics' });
router.post('/', profilePics.single('profilePic'), ProfileController.create);

router.get('/:id', ProfileController.getById);

module.exports = router;
