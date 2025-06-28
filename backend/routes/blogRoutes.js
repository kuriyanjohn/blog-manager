const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getPosts, getPost, createPost, updatePost, deletePost
} = require('../controllers/blogController');

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
