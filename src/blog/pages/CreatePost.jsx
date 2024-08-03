// src/blog/pages/CreatePost.jsx
import React from 'react';
import PostForm from '../shared/PostForm';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (postData) => {
    fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Post created:', data);
        navigate('/posts');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h2>Create New Post</h2>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
