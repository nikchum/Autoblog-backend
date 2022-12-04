const getCurrent = async (req, res) => {
  const { username, email, posts, token } = req.user;

  res.json({
    email,
    username,
    posts,
    token,
  });
};

module.exports = getCurrent;
