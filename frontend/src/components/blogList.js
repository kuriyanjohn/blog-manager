import React from 'react';

function BlogList({ posts, onView, onDelete, onEdit }) {
  return (
    <div>
      <h4>All Posts</h4>
      {posts.length === 0 && <p>No posts yet.</p>}
      <ul className="list-group">
        {posts.map(post => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={post._id}>
            <div>
              <strong>{post.title}</strong>
            </div>
            <div>
              <button className="btn btn-sm btn-info me-2" onClick={() => onView(post)}>View</button>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(post)}>Edit</button>
            <button
            className="btn btn-sm btn-danger"
            onClick={() => {
                if (window.confirm("Are you sure you want to delete this post?")) {
                onDelete(post._id);
                }
            }}
            >
            Delete
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;