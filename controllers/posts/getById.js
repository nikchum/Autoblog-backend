const { Post } = require('../../models/post');

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndUpdate(id, {
    $inc: { views: 1 },
  });

  res.json(post);
};

module.exports = getById;
