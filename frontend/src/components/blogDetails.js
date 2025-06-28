import React from 'react';
import './BlogDetails.css';

function BlogDetails({ post, onClose }) {
  return (
    <div className="blog-details card mt-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>{post.title}</h5>
        <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>Close</button>
      </div>
      <div className="card-body">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default BlogDetails;