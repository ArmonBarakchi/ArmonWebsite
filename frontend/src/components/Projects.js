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
              <h2>Visual Inertial SLAM</h2>
              <p>Simultaneous Localization and Mapping Via Extended Kalman Filters</p>
              <a className="read-more" href="/project/VISLAM">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/Visual-Inertial-Slam/tree/main"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>LiDAR-Based SLAM</h2>
              <p>Simultaneous Localization and Mapping using LiDAR measurements</p>
              <a className="read-more" href="/project/LIDAR">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/LiDAR-BASED-SLAM"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Lyapunov Analysis of Market Relative Wealth Via Hybrid Switching Diffusions</h2>
              <p> Developed a mathematical framework proving that an actively managed portfolio
                cannot fall arbitrarily far below its benchmark, using stochastic barrier
                functions and hybrid switching diffusions to establish rigorous probability
                guarantees on relative performance.</p>
              <a className="read-more" href="/project/hybridwealth">Read More →</a>
            </div>

          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>3D Orientation Tracking</h2>
              <p>Robot orientation tracking and panorama construction from IMU and camera data</p>
              <a className="read-more" href="/project/orientation">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/Orientation-Track-from-Sensor-Data"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h2>Options Pricing Models</h2>
              <p>Interactive GUI that uses various models to price options of NYSE stocks</p>
              <a className="read-more" href="/project/options">Read More →</a>
            </div>
            <a
                className="github-link"
                href="https://github.com/ArmonBarakchi/OptionsPricingModels"
                target="_blank"
                rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>

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
              <p>Published paper about the role of HPV oncoproteins on the prognosis of Head and Neck Squamous Cell
                Carcinoma </p>
              <a className="read-more" href="/project/E6">Read More →</a>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Projects;
