// src/components/Header.js
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FaLinkedin } from 'react-icons/fa';


function Header() {
  const fullText = "Armon Barakchi";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const initialDelay = 1000;
    const typeSpeed = 120;
    const postDelay = 1000;

    const startTyping = () => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < fullText.length) {
          setDisplayedText(fullText.slice(0, indexRef.current + 1));
          indexRef.current++;
        } else {
          clearInterval(intervalRef.current);
          setTimeout(() => setShowCursor(false), postDelay);
        }
      }, typeSpeed);
    };

    const delay = setTimeout(startTyping, initialDelay);

    return () => {
      clearTimeout(delay);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <header className="header">
      <div className="typewriter">
        <h1>
          {displayedText}
          {showCursor && <span className="cursor">|</span>}
        </h1>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a
            href="https://www.linkedin.com/in/armon-barakchi"
            target="_blank"
            rel="noopener noreferrer"
            style={{display: 'flex', alignItems: 'center'}}
        >
          <FaLinkedin size={20} style={{marginRight: '4px'}}/>
          LinkedIn
        </a>
        <a href="https://github.com/ArmonBarakchi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/about">About Me</a>
        <a href="/images/ArmonBarakchiResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="/contact">Contact</a>

      </nav>
    </header>
  );
}

export default Header;
