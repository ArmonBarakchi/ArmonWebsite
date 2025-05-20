// src/components/Projects.js
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <main className="projects-content">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project-card">
            <div className="project-info">
              <h2>LineBot</h2>
              <p>A robot car that follows a black line</p>
              <a className="read-more" href="/project/LineBot">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/LineBot/blob/main/LineBot.ino"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Papillary Thyroid Carcinoma Paper</h2>
              <p>Published paper about the role of fungal and archaeal microbes in different subtypes and genders of
                Papillary Thyroid Carcinoma </p>
              <a className="read-more" href="/project/Transcriptomic">Read More →</a>
            </div>

          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Head and Neck Cancer Paper</h2>
              <p>Published paper about the role of HPV oncoproteins on the prognosis of Head and Neck Squamous Cell Carcinoma </p>
              <a className="read-more" href="/project/E6">Read More →</a>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Projects;
