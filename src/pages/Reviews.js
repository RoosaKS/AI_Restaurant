import React from "react";
import "../styles/Reviews.css";

const reviews = [
  { name: "Anna M.", text: "Ihana ravintola! Ruoka oli todella herkullista.", rating: 5 },
  { name: "Mikko K.", text: "Erittäin viihtyisä tunnelma ja loistava menu!", rating: 4 },
  { name: "Laura P.", text: "Mahtava kokemus! Annokset olivat upeita.", rating: 5 },
  { name: "Jari R.", text: "Henkilökunta oli ystävällistä ja palvelu ensiluokkaista.", rating: 5 },
  { name: "Sari T.", text: "Suosittelen lämpimästi, loistava ravintola!", rating: 4 },
];

function Reviews() {
  return (
    <section className="reviews">
      <h2>Asiakaspalautteet</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p className="review-text">"{review.text}"</p>
            <p className="review-author">- {review.name}</p>
            <p className="review-rating">{"⭐".repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
