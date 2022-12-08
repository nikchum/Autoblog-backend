const createError = require('../../helpers');
const { Post } = require('../../models/post');
const { Comment } = require('../../models/comment');

const getPostComments = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw createError(404);
  }

  const list = await Promise.all(post.comments.map(comment => Comment.findById(comment)));

  console.log(list);
  res.json(list);
};

module.exports = getPostComments;
