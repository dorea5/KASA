import Montain from "../assets/Montain.svg";
import "../styles/Carts.css";
import "../styles/Cart.css";
import data from "../data.json";
import ApartmentList from "./Apartments";

function Carts() {
  return (
    <div>
      <div className="container_img">
        <img className="montain" src={Montain} alt="Paysage" />
        <div className="slogan">Chez vous, partout et ailleurs</div>
      </div>

      <div className="cartsbox">
        <div className="carts">
          <div className="apartments">
            <ApartmentList apartments={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
