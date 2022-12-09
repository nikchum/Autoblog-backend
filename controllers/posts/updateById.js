const path = require('path');
const { Post } = require('../../models/post');
const { createError } = require('../../helpers');

const updateById = async (req, res) => {
  const { id } = req.params;
  const { title, text } = req.body;

  const post = await Post.findById(id);

  if (!post) {
    throw createError(404);
  }

  if (req.files) {
    const fileName = Date.now().toString() + req.files.image.name;
    req.files.image.mv(path.join(__dirname, '../..', 'uploads', fileName));

    post.imgUrl = fileName;
  }

  post.title = title;
  post.text = text;

  await post.save();

  res.json({ post, message: 'Post updated successfully' });
};

module.exports = updateById;
