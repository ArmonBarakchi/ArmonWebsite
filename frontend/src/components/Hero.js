// src/components/Hero.js
import React from "react";
import "./Hero.css";

function Hero() {
  return (
      <section className="hero">
          <div className="hero-text">
              <div className="tag">
                  <h2>Electrical<br/>Engineer.</h2>
              </div>
              <p className="blurb">
                  Trained in electrical engineering. Focused on using my cross-disciplinary background to create elegant
                  solutions to complex problems. Strong Foundation in C++ and Python.
              </p>
              <a href="/projects" className="cta-button">My Work</a>

          </div>


          <div className="hero-image">
          <img src="/images/profile.jpeg" alt="Profile"/>
          </div>

      </section>
  );
}

export default Hero;
