import React from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">Contact</h1>
      <p className="contact-page-description">
        If you’d like to reach out, feel free to email me or DM me on Instagram.
      </p>
      <div className="contact-page-info">
        <a href="mailto:driveisxshoot@gmail.com" className="contact-page-email">
          driveisxshoot@gmail.com
        </a>
        <a
          href="https://www.instagram.com/drievisx"
          className="contact-page-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          @drievisx
        </a>
      </div>
    </div>
  );
}

export default Contact;
