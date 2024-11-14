import "../styles/Footer.css";
import LogoFooter from "../assets/LogoFooter.png";

function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <div className="footer-contain">
          <img src={LogoFooter} className="footer-logo" alt="LogoKasa" />

          <p> © 2020 Kasa, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
