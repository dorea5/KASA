import data from "../data.json";
import React from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import "../styles/PageApartments.css";
import Collapse from "./Collapse";

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
                <ul>
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
