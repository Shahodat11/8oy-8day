import React from "react";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import { Link, Route, Routes } from "react-router-dom";
import CreateProduct from "./pages/create-product/CreateProduct";

function App() {
  return (
    <>
      <div>
        <Link to={"/"}>Home </Link>
        <Link to={"/create-product"}>create-product </Link>
        <Link to={"/login"}>Login </Link>
        <Link to={"/register"}>Register </Link>
        <Link to={"/user"}>User</Link>
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
