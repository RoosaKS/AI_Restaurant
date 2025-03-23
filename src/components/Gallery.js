import React, { useState } from "react";
import "../styles/Gallery.css";
import dishImage from "../assets/images/dish.jpg";
import interiorImage from "../assets/images/restaurant-interior.jpg";
import teamImage from "../assets/images/team.jpg";
import salmonImage from "../assets/images/grilled-salmon.jpg";
import tofuRisottoImage from "../assets/images/tofu-risotto.jpg";

const images = [
  { src: dishImage, alt: "Annoksen kuva" },
  { src: interiorImage, alt: "Ravintolan sisustus" },
  { src: teamImage, alt: "Ravintolan tiimi" },
  { src: salmonImage, alt: "Grillattu lohi" },
  { src: tofuRisottoImage, alt: "Tofu-risotto" },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery">
      <h2>Kuvagalleria</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Suurempi kuva" className="modal-image" />
        </div>
      )}
    </section>
  );
}

export default Gallery;
