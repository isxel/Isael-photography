/**
 * Header component
 * Renders the header of the page
 *
 * Contains the title of the page and navigation links
 *
 * @returns Header component
 */

import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header>
      <h1 className="header-title">ISAEL RAMIREZ</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/commission">Commission</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
