const { Contact } = require("../../models/contact.js");
const { createError } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw createError(404);
  }

  res.json(result);
};

module.exports = updateById;
