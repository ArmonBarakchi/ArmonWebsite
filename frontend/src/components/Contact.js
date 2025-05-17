// src/components/Contact.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";  // optional styling

function Contact() {
  return (
    <div className="App">
      <main className="main-content contact-section">
        <h2>Contact Me</h2>
        <p>If you’d like to get in touch, feel free to send me a message using the form below.</p>

        <form
            className="contact-form"
            action="https://formspree.io/f/xqaqndya"
            method="POST"
        >
          <label>
            Name:
            <input type="text" name="name" required/>
          </label>
          <label>
            Email:
            <input type="email" name="email" required/>
          </label>
          <label>
            Message:
            <textarea name="message" required/>
          </label>
          <button type="submit">Send</button>
        </form>
<div style={{ height: '290px' }}></div>  {/* spacer to push footer */}

      </main>
    </div>

  );
}

export default Contact;
