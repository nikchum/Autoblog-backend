const { isValidObjectId } = require('mongoose');

const { createError } = require('../helpers');

const isValidId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(createError(400, 'Not valid id'));
  }

  next();
};

module.exports = isValidId;
