import React from "react";
import "../mainCarts/mainCards.css";
import cart1 from "../../assets/apple-watch-series7-black-myshop-pk-1-removebg-preview 1.svg";
import cart2 from "../../assets/xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.svg";
import cart3 from "../../assets/6426000_sd-removebg-preview 1.svg";

const MainCarts = () => {
  return (
    <div className="container">
      <div className="mainCarts">
        <div className="cart">
          <img src={cart1} alt="" />
          <div className="nav">
            <h6 className="cart_h6">Apple</h6>
            <p className="cart_p">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="cart">
          <img src={cart2} alt="" />
          <div className="nav">
            <h6 className="cart_h6">Xiaomi</h6>
            <p className="cart_p">
              Xiaomi smart watches are produced by MI company.
            </p>
          </div>
        </div>
        <div className="cart">
          <img src={cart3} alt="" />
          <div className="nav">
            <h6 className="cart_h6">FitBit</h6>
            <p className="cart_p">
              FitBit smart watches are best for there health and fitness
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarts;
