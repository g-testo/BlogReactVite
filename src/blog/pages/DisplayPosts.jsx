// src/blog/pages/DisplayPosts.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container">
      <h2>All Posts</h2>
      <div className="list-group">
        {posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`} className="list-group-item list-group-item-action">
            <h5>{post.title}</h5>
            <p>{post.content.substring(0, 100)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayPosts;
