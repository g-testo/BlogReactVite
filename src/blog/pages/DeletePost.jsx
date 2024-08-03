// src/blog/pages/DeletePost.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Post deleted');
        navigate('/posts');
      })
      .catch(error => console.error('Error deleting post:', error));
  }, [id, navigate]);

  return (
    <div className="container">
      <h2>Deleting Post...</h2>
    </div>
  );
};

export default DeletePost;
