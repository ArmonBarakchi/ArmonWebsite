import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
        <div className="about-content">
            <p>
                I'm Armon Barakchi — a software engineer with a background in electrical engineering.
                I enjoy building performant, well-structured systems in C++ and Python.
                My passion lies in solving complex problems at the intersection of logic and creativity.
            </p>
            <p>
                I completed my undergraduate degree at the University of California, San Diego (UCSD) and
                earned a B.S. in Electrical Engineering with a concentration in machine learning and controls.
                I am currently pursuing a master's degree at UCSD in Electrical and Computer Engineering, with an emphasis
                in intelligent systems, robotics, and controls. Having an electrical engineering background gives me one
                more strength as a software engineer. It has shown me how to think at all levels of abstraction — from hardware
                constraints to abstract logic — and to analyze problems both with analytical rigor and practical imagination.
                Studies in advanced math, optimization, and algorithms, in addition to working with embedded systems and
                systems design, have given a good foundation for designing consistent, efficient software that meaningfully
                interacts with the real world.
            </p>
            <p>
                Some of my favorite things to work on include building intelligent, minimalist systems — whether that's
                writing fast C++ for embedded systems, using Python to hack together machine learning pipelines, or building
                tools that bring together hardware and software in beautiful ways. I enjoy projects that challenge me to
                think critically about performance, design, and usability. I'm especially drawn to work that is a balance
                between theory and implementation — where mathematical models, algorithms, and clean code come together to
                address real-world problems.
            </p>
            <p>
                Outside of engineering, I love surfing, hiking, going to the gym, and learning through writing. I'm currently
                seeking full-time opportunities in software and quantitative development.

            </p>
        </div>
    </section>
  );
};

export default About;
