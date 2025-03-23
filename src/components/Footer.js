import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"; // Lisää tyylitiedosto tarvittaessa

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Ravintola Makunautinto</p>
        <p><Link to="/reviews">Lue asiakkaidemme arvosteluja</Link></p>
        <p>Osoite: Esimerkkikatu 1, Helsinki</p>
        <p>Puhelin: 012 345 6789 | Sähköposti: info@makunautinto.fi</p>
        <p>Aukioloajat: Ma-Pe 10:00-22:00, La-Su 12:00-23:00</p>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Tietosuojaseloste</a> | 
        <a href="/terms-of-service">Käyttöehdot</a>
      </div>
      <div className="footer-social">
        <p>Seuraa meitä:</p>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
    /*Footerin sijaan oma osio pääsisällössä: Jos kartta tuntuu tärkeältä, 
    voit tehdä sille oman osion, esimerkiksi "Sijainti" tai "Näin löydät meidät". 
    Tämä osio voi sijaita esim. aukioloaikojen tai yhteystietojen yhteydessä.
    Linkki navigointiin: Footerissa voi olla pelkkä linkki tyyliin "Katso sijainti kartalta", 
    joka avaa Google Mapsin tai muun navigointipalvelun.*/
  );
}

export default Footer;
