const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../../models/user');
const { createError } = require('../../helpers');

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password, username } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, 'Email in use');
  }

  const checkUsername = await User.findOne({ username });

  if (checkUsername) {
    throw createError(409, 'Username in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ username, email, password: hashPassword });

  const payload = {
    id: newUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '10d' });

  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    token,
    message: 'Registration successful',
  });
};

module.exports = register;
