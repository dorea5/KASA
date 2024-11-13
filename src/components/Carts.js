import Montain from "../assets/Montain.svg";
import "../styles/Carts.css";

function Carts() {
  return (
    <div>
      <div className="container_img">
        <img className="montain" src={Montain} alt="Paysage" />
      </div>
      <div className="slogan">Chez vous, partout et ailleurs</div>
      <div className="cartsbox">
        <div className="carts"></div>
      </div>
    </div>
  );
}

export default Carts;
