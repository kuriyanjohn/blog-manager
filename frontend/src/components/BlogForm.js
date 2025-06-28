import React, { useEffect, useState } from 'react';

function BlogForm({ addPost, editingPost, updatePost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Fill all fields");
    const post = { title, content };
    editingPost ? updatePost({ ...post, _id: editingPost._id }) : addPost(post);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h4>{editingPost ? "Edit Post" : "New Post"}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Post Content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {editingPost ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;