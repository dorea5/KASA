import React, { useState } from "react";
import "../styles/Collapse.css";

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
        <span className={`collapse-arrow ${isOpen ? "open" : ""}`}>
          &#x2304;
        </span>
      </button>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
