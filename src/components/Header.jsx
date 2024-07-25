import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>ISAEL RAMIREZ</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/">Home</Link>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}

export default Header;
