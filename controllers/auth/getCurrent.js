const getCurrent = async (req, res) => {
  const { username, email, posts, token, _id } = req.user;

  res.json({
    _id,
    email,
    username,
    posts,
    token,
  });
};

module.exports = getCurrent;
