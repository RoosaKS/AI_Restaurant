import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Header.css";

function Header() {
  const { i18n, t } = useTranslation(); // Käytetään käännöksiä
  const [menuOpen, setMenuOpen] = useState(false); // Mobiilimenu

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Vaihdetaan kieli
    localStorage.setItem("language", lng); // Tallennetaan käyttäjän valinta
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={require("../assets/images/logo.png")} alt="Ravintolan logo" />
        </Link>
      </div>

      {/* Mobiilivalikon togglaaminen */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav>
        <ul className={menuOpen ? "show" : ""}>
          <li><Link to="/">{t("home")}</Link></li>
          <li><Link to="/menu">{t("menu")}</Link></li>
          <li><Link to="/reservation">{t("reservation")}</Link></li>
          <li><Link to="/contact">{t("contact")}</Link></li>
          <li><Link to="/about">{t("about")}</Link></li>
          <li><Link to="/gallery">{t("gallery")}</Link></li>
          <li><Link to="/reviews">{t("reviews")}</Link></li>
        </ul>
      </nav>

      {/* Kielivalitsin */}
      <div className="language-switcher">
        <button onClick={() => changeLanguage("fi")}>🇫🇮 FI</button>
        <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
      </div>
    </header>
  );
}

export default Header;
