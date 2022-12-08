const getAll = require('./getAll');
const add = require('./add');
const getById = require('./getById');
const getUserPosts = require('./getUserPosts');
const removeById = require('./removeById');
const updateById = require('./updateById');
const getPostComments = require('./getPostComments');

module.exports = {
  getAll,
  add,
  getById,
  getUserPosts,
  removeById,
  updateById,
  getPostComments,
};
