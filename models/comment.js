const Joi = require('joi');
const { Schema, model } = require('mongoose');

const { handleSaveErrors } = require('../helpers');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, 'Set title for post'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

commentSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  comment: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const Comment = model('comment', commentSchema);

module.exports = {
  Comment,
  schemas,
};
