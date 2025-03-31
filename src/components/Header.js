import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // tuo käännökset
import "../styles/Header.css";

function Header() {
  const { i18n } = useTranslation(); // käännösten käyttö

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={require("../assets/images/logo.png")} alt="Ravintolan logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">{i18n.t("home")}</Link></li>
          <li><Link to="/menu">{i18n.t("menu")}</Link></li>
          <li><Link to="/reservation">{i18n.t("reservation")}</Link></li>
          <li><Link to="/contact">{i18n.t("contact")}</Link></li>
          <li><Link to="/about">{i18n.t("about")}</Link></li>
          <li><Link to="/gallery">{i18n.t("gallery")}</Link></li>
          <li><Link to="/reviews">{i18n.t("reviews")}</Link></li>
        </ul>
      </nav>
      <div className="language-switcher">
        <button onClick={() => changeLanguage("fi")}>🇫🇮 FI</button>
        <button onClick={() => changeLanguage("en")}>🇬🇧 EN</button>
      </div>
    </header>
  );
}

export default Header;
