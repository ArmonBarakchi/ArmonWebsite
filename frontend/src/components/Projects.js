// src/components/Projects.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <main className="projects-content">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project-card">
            <h2>LineBot</h2>
            <p>A real-time sports betting bot that uses line movement to exploit inefficiencies.</p>
            <a href="https://github.com/ArmonBarakchi/LineBot" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </div>
          <div className="project-card">
            <h2>Quantitative Trading Model</h2>
            <p>A high-frequency trading model using statistical arbitrage in Python and pandas.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </div>
          {/* Add more project cards here */}
        </div>
      </main>

    </div>
  );
};

export default Projects;
