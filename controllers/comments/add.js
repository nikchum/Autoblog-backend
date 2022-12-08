const { Comment } = require('../../models/comment');
const { Post } = require('../../models/post');

const add = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const result = await Comment.create({ comment, author: req.user._id });
  console.log(result);
  await Post.findByIdAndUpdate(id, {
    $push: { comments: result._id },
  });

  res.status(201).json({ result, message: 'Comment added' });
};

module.exports = add;
