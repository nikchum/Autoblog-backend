const handleSaveErrors = (error, data, next) => {
  const { code, name } = error;
  console.log(error);
  console.log(name);
  error.status = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  // error.message = 'Conflict unique DB';
  next();
};

module.exports = handleSaveErrors;
