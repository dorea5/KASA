import React, { useState } from "react";
import "../styles/Collapse.css";
import Arrow from "../assets/Arrow.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <button
        className={`collapse-button ${isOpen ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        {title}
        <img
          src={Arrow}
          alt="Arrow Icon"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
