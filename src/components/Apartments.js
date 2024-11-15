import ApartmentCard from "./CartApartment";
import data from "../data.json";
import React, { useEffect, useState } from "react";
function ApartmentList() {
  const [apartments, setApartments] = useState([]);

  // Charger les données du fichier JSON
  useEffect(() => {
    setApartments(data);
  }, []);

  return (
    <div className="apartment-list">
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default ApartmentList;
