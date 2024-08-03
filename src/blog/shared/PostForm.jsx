// src/blog/shared/PostForm.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PostForm = ({ initialData = {}, onSubmit }) => {
    const [title, setTitle] = useState(initialData.title || "");
    const [content, setContent] = useState(initialData.content || "");

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setContent(initialData.content || "");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
    };

    return (
        <form onSubmit={handleSubmit} className="form-group">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    className="form-control"
                    id="content"
                    rows="5"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

PostForm.propTypes = {
    initialData: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
