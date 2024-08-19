import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

function Header() {
  console.log("Header component rendered");
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
