import React from "react";
import "../styles/About.css";
import teamImage from "../assets/images/team.jpg";
import restaurantInterior from "../assets/images/restaurant-interior.jpg";

function About() {
  return (
    <section className="about">
      <h2>Meidän Tarina</h2>
      <p><strong>Ravintola Makunautinto</strong> syntyi rakkaudesta laadukkaaseen ruokaan ja unohtumattomiin elämyksiin. Olemme tarjonneet herkullisia makuelämyksiä jo vuodesta 2010.</p>
      
      <h3>Tiimimme</h3>
      <div className="about-content">
        <img src={teamImage} alt="Ravintolan tiimi" className="about-image" />
        <p>Meidän intohimoinen tiimimme koostuu kokeneista kokeista ja ystävällisestä palveluhenkilökunnasta, jotka tekevät kaikkensa, jotta vierailusi olisi täydellinen.</p>
      </div>
      
      <h3>Arvomme</h3>
      <ul>
        <li><strong>Kestävän kehityksen periaatteet:</strong> Suosimme lähiruokaa ja ekologisia raaka-aineita.</li>
        <li><strong>Laadukkaat raaka-aineet:</strong> Käytämme vain parhaita, sesongin mukaisia aineksia.</li>
        <li><strong>Vieraanvaraisuus:</strong> Haluamme tarjota lämpimän ja kodikkaan kokemuksen jokaiselle asiakkaalle.</li>
      </ul>
      
      <h3>Ravintolamme</h3>
      <div className="about-content">
        <img src={restaurantInterior} alt="Ravintolan sisätilat" className="about-image" />
        <p>Nauti viihtyisästä tunnelmasta ja kauniista sisustuksesta, joka luo täydellisen ympäristön herkullisille aterioille.</p>
      </div>
      
      <div className="about-cta">
        <p><strong>Tule kokemaan itse!</strong> Varaa pöytä jo tänään ja koe unohtumattomat makuelämykset.</p>
        <a href="/reservation" className="about-button">Varaa pöytä</a>
      </div>
    </section>
  );
}

export default About;
