const { Post } = require('../../models/post');
const { User } = require('../../models/user');
const path = require('path');

const add = async (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  const { _id, username } = req.user;

  if (req.files) {
    const fileName = Date.now().toString() + req.files.image.name;
    req.files.image.mv(path.join(__dirname, '../..', 'uploads', fileName));

    const newPostWithImage = await Post.create({
      username,
      title,
      text,
      imgUrl: fileName,
      author: _id,
    });

    await User.findByIdAndUpdate(_id, {
      $push: { posts: newPostWithImage },
    });

    res.status(201).json({ newPostWithImage, message: 'Post created successfully' });
  }

  const newPostWithoutImage = await Post.create({
    username,
    title,
    text,
    author: _id,
  });

  await User.findByIdAndUpdate(_id, {
    $push: { posts: newPostWithoutImage },
  });

  res.status(201).json({ newPostWithoutImage, message: 'Post created successfully' });
};

module.exports = add;
