import React from "react";
import "../mainTop/mainTop.css";
import mainTop from "../../assets/17b2724d5bd682148b44a88441cad7bfa9fe6730_original-removebg-preview 1.svg";
import { IoSearchOutline } from "react-icons/io5";

function MainTop() {
  return (
    <div className="main">
      <div className="container">
        <div className="mainTops">
          <div className="mainTop">
            <h2>Discover Most Suitable Watches</h2>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="form">
              <input
                className="input"
                type="text"
                placeholder="Find the best brands"
              />
              <button className="form_button">Search</button>
            </div>
          </div>
          <img className="main-img" src={mainTop} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainTop;
