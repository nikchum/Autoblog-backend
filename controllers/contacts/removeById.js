const { Contact } = require("../../models/contact.js");
const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);

  if (!result) {
    throw createError(404);
  }

  res.json({ message: "Book deleted" });
};

module.exports = removeById;
