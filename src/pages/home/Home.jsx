import React from "react";
import MainTop from "../../components/mainTop/MainTop";
import MainCarts from "../../components/mainCarts/MainCarts";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <div>
        <MainTop />
        <MainCarts />
        <Products />
        <Banner />
      </div>
    </div>
  );
};

export default Home;
