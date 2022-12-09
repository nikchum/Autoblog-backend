const { Post } = require('../../models/post');
const createError = require('../../helpers');

const getAll = async (req, res) => {
  const posts = await Post.find({}, '-updatedAt').sort('-createdAt');
  const popular = await Post.find({}, '-updatedAt').limit(5).sort('-views');

  if (!posts) {
    throw createError(404);
  }

  res.json({ posts, popular });
};

module.exports = getAll;
