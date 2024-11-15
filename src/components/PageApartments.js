import data from "../data.json";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import "../styles/PageApartments.css";
import Collapse from "./Collapse";
import StarEmpty from "../assets/StarEmpty.png";
import StarFilled from "../assets/StarFilled.png";

function PageApartments() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <div>Logement introuvable</div>;
  }

  // Fonction pour afficher les étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={i < rating ? StarFilled : StarEmpty}
          alt="star"
          className="star"
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <Banner />
      <div className="apartment-details">
        {/* Image principale */}
        <img
          className="apartment-image"
          src={apartment.cover}
          alt={apartment.title}
        />

        {/* Informations sur le logement */}
        <div className="apartment-header">
          <div className="apartment-info">
            <div className="aline">
              <div className="column">
                <h2>{apartment.title}</h2>
                <p>{apartment.location}</p>
                <div className="tags">
                  {apartment.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Profil de l'hôte */}
              <div className="host-rating">
                <div className="host-profile">
                  <span className="host-name">{apartment.host.name}</span>
                  <img
                    src={apartment.host.picture}
                    alt={apartment.host.name}
                    className="host-picture"
                  />
                </div>

                {/* Affichage des étoiles */}
                <div className="rating">{renderStars(apartment.rating)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections Description et Équipements avec Collapse */}
        <div className="collapse-sections">
          <div className="collapse-item">
            <Collapse
              title="Description"
              content={<p>{apartment.description}</p>}
            />
          </div>
          <div className="collapse-item">
            <Collapse
              title="Équipements"
              content={
                <ul className="equipments-list">
                  {apartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageApartments;
