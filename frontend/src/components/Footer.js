import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Armon Barakchi. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:abarakchi@ucsd.edu" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://github.com/ArmonBarakchi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
