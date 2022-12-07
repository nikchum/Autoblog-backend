const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { createError } = require('../../helpers');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(401, 'Email invalid');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createError(401, 'Password invalid');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '10d' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    _id: user._id,
    token,
    email: user.email,
    posts: user.posts,
    username: user.username,
    message: 'Login successful',
  });
};

module.exports = login;
