// src/components/Blogs.js
import React from "react";
import "./Blogs.css";

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h2>Blog</h2>
      <div className="blog-list">
        <div className="blog-card">
          <h3>Why Engineers Should Write</h3>
          <p>
            Thoughts on how writing improves technical clarity, collaboration, and decision-making.
          </p>
          <a href="#">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>What I Learned Building My Website</h3>
          <p>
            Breaking down the design, tech stack, and small decisions that made a big difference.
          </p>
          <a href="#">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Why Engineers Should Write</h3>
          <p>
            Thoughts on how writing improves technical clarity, collaboration, and decision-making.
          </p>
          <a href="#">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Why Engineers Should Write</h3>
          <p>
            Thoughts on how writing improves technical clarity, collaboration, and decision-making.
          </p>
          <a href="#">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Why Engineers Should Write</h3>
          <p>
            Thoughts on how writing improves technical clarity, collaboration, and decision-making.
          </p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
