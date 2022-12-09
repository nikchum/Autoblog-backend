const { Post } = require('../../models/post');
const { User } = require('../../models/user');
const createError = require('../../helpers');

const removeById = async (req, res) => {
  const { _id: userId } = req.user;
  const { id } = req.params;

  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    throw createError(404);
  }

  await User.findByIdAndUpdate(userId, {
    $pull: { posts: id },
  });

  res.json({ message: 'Post deleted' });
};

module.exports = removeById;
