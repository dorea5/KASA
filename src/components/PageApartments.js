import data from "../data.json";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import "../styles/PageApartments.css";
import Collapse from "./Collapse";
import StarEmpty from "../assets/StarEmpty.png";
import StarFilled from "../assets/StarFilled.png";
import Carousel from "./Carousel";

function PageApartments() {
  const { id } = useParams();
  const navigate = useNavigate();

  const apartment = data.find((item) => item.id === id);

  // Rediriger vers la page 404 si l'appartement n'est pas trouvé

  React.useEffect(() => {
    if (!apartment) {
      navigate("/404", { replace: true }); // Remplacement dans l'historique
    }
  }, [apartment, navigate]);

  if (!apartment) {
    return <div>Logement introuvable</div>;
  }

  // Fonction pour afficher les étoiles
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

      {/* Carrousel d'images */}
      {apartment.pictures.length > 1 ? (
        <Carousel pictures={apartment.pictures} />
      ) : (
        <img
          className="single-image"
          src={apartment.pictures[0]}
          alt={apartment.title}
        />
      )}

      <div className="apartment-details">
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
