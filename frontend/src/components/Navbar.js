// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar({ closeMenu }) {
  return (
    <div className="navbar">
      <ul>
        <li><a href="/" onClick={closeMenu}>Home</a></li>
        <li><a href="/projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="https://github.com/ArmonBarakchi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="/static/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
