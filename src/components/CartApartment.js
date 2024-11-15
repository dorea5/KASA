import React from "react";
import { useNavigate } from "react-router-dom";

function ApartmentCard({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apartment/${id}`);
  };

  return (
    <div className="apartment-card" onClick={handleClick}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default ApartmentCard;
