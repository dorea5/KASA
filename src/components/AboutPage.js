import About from "../assets/About.png";
import "../styles/About.css";
import Banner from "./Banner";

export default function AboutPage() {
  return (
    <div>
      <Banner />
      <div className="about-pic-container">
        <img src={About} className="about-pic" alt="Paysage" />
      </div>
      <div></div>
    </div>
  );
}
