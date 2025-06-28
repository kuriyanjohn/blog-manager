const Joi = require('joi');

const blogSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required()
});

module.exports = blogSchema;
