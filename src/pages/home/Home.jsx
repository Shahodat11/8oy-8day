import React from "react";
import MainTop from "../../components/mainTop/MainTop";
import MainCarts from "../../components/mainCarts/MainCarts";
import Products from "../../components/products/Products";
import Banner from "../../components/banner/Banner";
import MainBottom from "../../components/mainBottom/MainBottom";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div>
        <MainTop />
        <MainCarts />
        <Products />
        <Banner />
        <MainBottom />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
