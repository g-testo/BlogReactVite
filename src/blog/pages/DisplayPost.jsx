// src/blog/pages/DisplayPost.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DisplayPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center my-5"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger my-5">{error}</div>;
  if (!post) return <div className="alert alert-warning my-5">No post found</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.content}</p>
              <div className="d-flex justify-content-end mt-4">
                <Link to={`/update/${post.id}`} className="btn btn-secondary me-2">Edit</Link>
                <Link to={`/delete/${post.id}`} className="btn btn-danger">Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;
