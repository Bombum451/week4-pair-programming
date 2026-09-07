const express = require('express');

const router = express.Router();

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
} = require('../controllers/userControllers');

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:userId', getUserById);

router.put('/:userId', updateUser);

module.exports = router;