const { createError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      next(createError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;
