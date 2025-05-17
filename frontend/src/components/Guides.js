import React from "react";
import "./Guides.css";

function Guides() {
  return (
    <section className="guides" id="guides">
      <h2>Guides</h2>
      <div className="guide-list">
        <div className="guide-card">
          <h3>How to Learn C++ for Real Projects</h3>
          <p>A practical guide to going beyond syntax and writing real C++ systems.</p>
          <a href="#">Read More →</a>
        </div>
        <div className="guide-card">
          <h3>Python for Engineers</h3>
          <p>How I use Python to automate, test, and explore engineering problems fast.</p>
          <a href="#">Read More →</a>
        </div>
        <div className="guide-card">
          <h3>Python for Engineers</h3>
          <p>How I use Python to automate, test, and explore engineering problems fast.</p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  );
}

export default Guides;
