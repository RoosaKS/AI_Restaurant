import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 🔥 TUO KÄÄNNÖKSET 🔥
import "../styles/Hero.css";
import heroImage from "../assets/images/restaurant-hero-image.jpg"; 
import dishImage from "../assets/images/dish.jpg"; 
import interiorImage from "../assets/images/interior.jpg"; 

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation(); // 🔥 OTETAAN KÄÄNNÖS FUNKTIO KÄYTTÖÖN 🔥

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>{t("welcome")}</h1>  {/* 🔥 TÄMÄ MUUTTUU KIELEN MUKAAN 🔥 */}
        <p>{t("description")}</p>  {/* 🔥 TÄMÄ MYÖS 🔥 */}
        <p className="hero-opening-hours">{t("openingHours")}</p>
        
        <div className="hero-buttons">
          <button onClick={() => navigate("/menu")}>{t("viewMenu")}</button>
          <button onClick={() => navigate("/reservation")}>{t("bookTable")}</button>
        </div>
      </div>

      <div className="hero-gallery">
        <img src={dishImage} alt={t("dishImageAlt")} loading="lazy"/>
        <img src={interiorImage} alt={t("interiorImageAlt")} loading="lazy" />
      </div>
    </section>
  );
}

export default Hero;
