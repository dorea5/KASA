import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error404.css";
import Banner from "./Banner";
import Footer from "./Footer";

const Error404 = () => {
  return (
    <div>
      <Banner />
      <div className="error-page">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="back-home">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
