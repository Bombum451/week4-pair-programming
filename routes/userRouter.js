const express = require('express');

const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUserById,
} = require('../controllers/userControllers');

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:userId', getUserById);

module.exports = router;