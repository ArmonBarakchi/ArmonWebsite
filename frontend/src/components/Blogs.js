// src/components/Blogs.js
import React from "react";
import "./Blogs.css";
import { Link } from 'react-router-dom';

function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h2>Blog</h2>
      <div className="blog-list">
        <div className="blog-card">
          <h3>From Medicine to Engineering</h3>
          <p>
              Exploring my journey from pre-med to software engineering and what I learned from it.
          </p>
          <Link to="/blog/med-EE">Read More →</Link>
        </div>
        <div className="blog-card">
          <h3>What I Learned Building My Website</h3>
          <p>
            Breaking down the design, tech stack, and small decisions that made a big difference.
          </p>
          <a href="/blog/building">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Why Engineers Should Write</h3>
          <p>
            Thoughts on how writing improves technical clarity, collaboration, and decision-making.
          </p>
          <a href="/blog/WhyEngineersShouldWrite">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>Open-Ended Problems I Find Interesting</h3>
          <p>
            Thoughts on cutting-edge problems and their potential applications.
          </p>
          <a href="/blog/funproblems">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>A Letter to Home</h3>
          <p>
            Creative writing about where I am from.
          </p>
          <a href="/blog/A_Letter_to_Home">Read More →</a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
