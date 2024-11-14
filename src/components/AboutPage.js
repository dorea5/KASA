import About from "../assets/About.png";
import "../styles/About.css";
import Banner from "./Banner";
import Footer from "./Footer";
import MenuAbout from "./MenuAbout";

export default function AboutPage() {
  return (
    <div>
      <Banner />
      <div className="about-pic-container">
        <img src={About} className="about-pic" alt="Paysage" />
      </div>
      <div className="container-all-menu">
        <div className="container-menu">
          <MenuAbout />
        </div>
      </div>
      <Footer />
    </div>
  );
}
