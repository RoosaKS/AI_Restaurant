import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import MenuPreview from "../components/MenuPreview";
import Events from "../components/Events";
import "../styles/Home.css";

const reviews = [
  { name: "Anna M.", text: "Ihana ravintola! Ruoka oli todella herkullista.", rating: 5 },
  { name: "Mikko K.", text: "Erittäin viihtyisä tunnelma ja loistava menu!", rating: 4 },
  { name: "Laura P.", text: "Mahtava kokemus! Annokset olivat upeita.", rating: 5 },
];

function Home() {
  return (
    <div className="home">
      <Hero />
      <MenuPreview />
      <Events />

      <div className="customer-reviews">
        <h2>Asiakaspalautteet</h2>
        <div className="review-list">
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="review">
              <p className="review-text">"{review.text}"</p>
              <p className="review-author">- {review.name}</p>
              <p className="review-rating">{"⭐".repeat(review.rating)}</p>
            </div>
          ))}
        </div>
        
        {/* Lue lisää -painike */}
        <Link to="/reviews" className="review-button">Lue lisää palautteita</Link>
      </div>
    </div>
  );
}

export default Home;
