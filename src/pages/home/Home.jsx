import React from "react";
import MainTop from "../../components/mainTop/MainTop";
import MainCarts from "../../components/mainCarts/MainCarts";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <div>
        <MainTop />
        <MainCarts />
        <Products />
      </div>
    </div>
  );
};

export default Home;
