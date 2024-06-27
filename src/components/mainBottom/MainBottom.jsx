import React from "react";
import "../mainBottom/mainBottom.css";
import main from "../../assets/6426000_sd-removebg-preview 1 (1).svg";

const MainBottom = () => {
  return (
    <div className="container">
      <div className="mainBottom">
        <div className="main_nav">
          <h6 className="mainn-h6">Subscribe To Newsletter</h6>
          <p className="mainn-p">Get free guide about smart watches daily. </p>
          <div className="formm">
            <input
              className="input"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="form_button">Subscribe</button>
          </div>
        </div>
        <img className="mainn" src={main} alt="" />
      </div>
    </div>
  );
};

export default MainBottom;
