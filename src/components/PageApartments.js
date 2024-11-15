import data from "../data.json";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import "../styles/PageApartments.css";

function PageApartments() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <Banner />
      <div className="apartment-details">
        <img
          className="apartment-image"
          src={apartment.cover}
          alt={apartment.title}
        />
        <h2>{apartment.title}</h2>
        <p>{apartment.location}</p>
        <div className="tags">
          {apartment.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{apartment.description}</p>
        </div>
        <div className="equipments">
          <h3>Équipements</h3>
          <ul>
            {apartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageApartments;
