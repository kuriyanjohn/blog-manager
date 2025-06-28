const Blog = require('../models/blog');
const xss = require('xss');
const blogSchema = require('../validators/blogValidator');

const sanitizeInput = (input) => ({
  title: xss(input.title),
  content: xss(input.content)
});

const getPosts = async (req, res) => {
  const posts = await Blog.find();
  res.json(posts);
};

const getPost = async (req, res) => {
  const post = await Blog.findById(req.params.id);
  res.json(post);
};

const createPost = async (req, res) => {
  const sanitizedData = sanitizeInput(req.body);
  const post = new Blog({ ...sanitizedData, user: req.user.userId });
  await post.save();
  res.json(post);
};

const updatePost = async (req, res) => {
  const post = await Blog.findById(req.params.id);
  if (!post || post.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Unauthorized' });

  const updated = await Blog.findByIdAndUpdate(req.params.id, sanitizeInput(req.body), { new: true });
  res.json(updated);
};

const deletePost = async (req, res) => {
  const post = await Blog.findById(req.params.id);
  if (!post || post.user.toString() !== req.user.userId)
    return res.status(403).json({ message: 'Unauthorized' });

  await post.remove();
  res.json({ message: 'Deleted' });
};


module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
};
