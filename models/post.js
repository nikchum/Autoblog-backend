const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleSaveErrors } = require('../helpers');

const postSchema = new Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
      required: [true, 'Set title for post'],
    },
    text: {
      type: String,
      required: [true, 'Set text for post'],
    },
    imgUrl: {
      type: String,
      default: '',
    },
    views: {
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comment',
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

postSchema.post('save', handleSaveErrors);

const addSchema = Joi.object({
  username: Joi.string(),
  title: Joi.string().required(),
  text: Joi.string().required(),
  image: Joi.string(),
  views: Joi.number(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Post = model('post', postSchema);

module.exports = {
  Post,
  schemas,
};
