import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom"; // React Router
import "../styles/Banner.css";

function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        <div className="logo">
          <img src={Logo} className="App-Logo" alt="LogoKasa" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/App">Accueil</Link>
            </li>
            <li>
              <Link to="/AboutPage">À Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Banner;
