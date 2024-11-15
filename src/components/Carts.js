import Montain from "../assets/Montain.svg";
import "../styles/Carts.css";
import "../styles/Cart.css";
import { ApartmentsArray } from "./Apartments";
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
            <ApartmentList apartments={ApartmentsArray} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
