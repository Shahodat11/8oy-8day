import React from "react";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { Link, Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/create-product/CreateProduct";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
{
  /* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/" element={<Auth />}>
    <Route path="/Admin" element={<Admin />} />
  </Route>
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/single/:id" element={<Single />} />
</Routes>; */
}
