// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './blog/pages/CreatePost';
import DeletePost from './blog/pages/DeletePost';
import DisplayPost from './blog/pages/DisplayPost';
import DisplayPosts from './blog/pages/DisplayPosts';
import UpdatePost from './blog/pages/UpdatePost';

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Blog</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/posts"
                onClick={() => setIsNavCollapsed(true)}
              >
                All Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/create"
                onClick={() => setIsNavCollapsed(true)}
              >
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/posts" element={<DisplayPosts />} />
          <Route path="/posts/:id" element={<DisplayPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/update/:id" element={<UpdatePost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
