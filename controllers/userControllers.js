const User = require('../models/userModel');

const getAllUsers = (req, res) => {
   res.json(User.getAll());
};

module.exports = { getAllUsers };