const { Post } = require('../../models/post');

const getUserPosts = async (req, res) => {
  const { posts } = req.user;

  const listPosts = await Promise.all(posts.map(post => Post.findById(post)));

  res.json(listPosts);
};

module.exports = getUserPosts;
