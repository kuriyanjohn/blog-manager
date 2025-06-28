import React from 'react';

function BlogPage({ username }) {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end mb-3">
        <span className="text-muted">Logged in as <strong>{username}</strong></span>
      </div>
      {/* Blog content and management UI goes here */}
    </div>
  );
}

export default BlogPage;