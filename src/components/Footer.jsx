/**
 * Footer component
 * Renders the footer of the page
 * Contains the copy right information

 @returns Footer component
 */

import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Footer.css";

function footer() {
  return (
    <footer className="footer-container">
      <p>© 2024 Isael Ramirez / Driveisx</p>
    </footer>
  );
}

export default footer;
