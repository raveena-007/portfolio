import React from "react";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <h1>Raveena's Portfolio</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
