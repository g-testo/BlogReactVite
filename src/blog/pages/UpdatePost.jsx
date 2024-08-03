// src/blog/pages/UpdatePost.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../shared/PostForm';
import PropTypes from 'prop-types';

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  const handleSubmit = (postData) => {
    fetch(`http://localhost:8080/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Post updated:', data);
        navigate(`/posts/${id}`);
      })
      .catch(error => console.error('Error:', error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>Update Post</h2>
      <PostForm initialData={post} onSubmit={handleSubmit} />
    </div>
  );
};

UpdatePost.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UpdatePost;
