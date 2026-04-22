import React, { useState, useEffect, useRef } from "react";

const TITLES = ["Software Developer.", "Controls Engineer.", "Quantitative Analyst."];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 400;

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          // Finished typing — pause then start deleting
          timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentTitle.slice(0, displayedText.length - 1));
          timeoutRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          // Finished deleting — move to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, TYPE_SPEED);

    return () => clearTimeout(timeoutRef.current);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section className="hero">
      <div className="hero-text">
        <div className="tag">
          <h2>
            {displayedText}
            <span className="cursor">|</span>
          </h2>
        </div>
        <p className="blurb">
          Trained in electrical engineering. Focused on using my cross-disciplinary background to create elegant
          solutions to complex problems. Strong Foundation in C++ and Python.
        </p>
        <a href="/projects" className="cta-button">My Work</a>
      </div>

      <div className="hero-image">
        <img src="/images/profile.jpeg" alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;