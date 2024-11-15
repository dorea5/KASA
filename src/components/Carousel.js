import React, { useState } from "react";
import "../styles/Carousel.css";
import ArrowLeft from "../assets/ArrowLeft.png";
import ArrowRight from "../assets/ArrowRight.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gérer le clic sur la flèche droite
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Gérer le clic sur la flèche gauche
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Afficher la photo actuelle
  const currentPicture = pictures[currentIndex];

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <img
          src={ArrowLeft}
          alt="Previous"
          className="arrow left-arrow"
          onClick={handlePrev}
        />
      )}

      <img
        src={currentPicture}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {pictures.length > 1 && (
        <img
          src={ArrowRight}
          alt="Next"
          className="arrow right-arrow"
          onClick={handleNext}
        />
      )}

      {/* Compteur d'images */}
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
