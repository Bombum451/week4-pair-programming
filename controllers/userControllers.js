const User = require('../models/userModel');

const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

const createUser = (req, res) => {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
  } = req.body;

  const newUser = User.addOne(
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status
  );

  if (!newUser) {
    return res.status(500).json({ message: 'Fail to create user' });
  }

  res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const { userId } = req.params;

  const user = User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};