import React from "react";
import "./Guides.css";

function Guides() {
  return (
    <section className="guides" id="guides">
      <h2>Guides</h2>
      <div className="guide-list">
        <div className="guide-card">
          <h3>Making the Most of Your Undergraduate Years</h3>
          <p>What I’d do differently if I could start college over — the habits, mindsets, and decisions that would’ve made the biggest difference. </p>
          <a href="#">Read More →</a>
        </div>
        <div className="guide-card">
          <h3>Python for Engineers</h3>
          <p>How I use Python to automate, test, and explore engineering problems fast.</p>
          <a href="#">Read More →</a>
        </div>
        <div className="guide-card">
          <h3>C++ for Engineers: A Practical Introduction</h3>
          <p>What I wish I knew when learning C++ — a hands-on guide to writing real, efficient code for engineering applications.</p>
          <a href="#">Read More →</a>
        </div>
      </div>
    </section>
  );
}

export default Guides;
