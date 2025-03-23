import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src="/assets/images/logo.jpg" alt="Ravintolan logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Etusivu</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservation">Varaa pöytä</Link></li>
          <li><Link to="/contact">Yhteystiedot</Link></li>
          <li><Link to="/about">Meistä</Link></li>
          <li><Link to="/gallery">Galleria</Link></li>
          <li><Link to="/reviews">Arvostelut</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
