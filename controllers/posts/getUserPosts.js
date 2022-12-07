const { Post } = require('../../models/post');

const getUserPosts = async (req, res) => {
  const { posts } = req.user;

  console.log(posts);
  const listPosts = await Promise.all(posts.map(post => Post.findById(post)));
  console.log(listPosts);
  res.json(listPosts);
};

module.exports = getUserPosts;
