import React from "react";
import { useNavigate } from "react-router-dom"; // React Router -navigointi
import "../styles/Hero.css";
import heroImage from "../assets/images/restaurant-hero-image.jpg"; 
import dishImage from "../assets/images/dish.jpg"; 
import interiorImage from "../assets/images/interior.jpg"; 
import Events from "../components/Events";

function Hero() {
  const navigate = useNavigate(); // Käytetään React Routerin navigate-funktiota

  return (
    <section 
      className="hero" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Tervetuloa Ravintola Makunautintoon</h1>
        <p>Koe unohtumattomia makuelämyksiä ja upeaa tunnelmaa!</p>
        <p className="hero-opening-hours">Aukioloajat: Ma-Pe 10:00-22:00, La-Su 12:00-23:00</p>
        
        <div className="hero-buttons">
          <button onClick={() => navigate("/menu")}>Katso menu</button>
          <button onClick={() => navigate("/reservation")}>Varaa pöytä</button>
        </div>
      </div>

      <div className="hero-gallery">
        <img src={dishImage} alt="Herkullinen annos" />
        <img src={interiorImage} alt="Ravintolan tunnelmallinen sisustus" />
      </div>
      <Events />
    </section>
  );
}

export default Hero;
