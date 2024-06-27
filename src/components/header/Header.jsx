import React from "react";
import "../header/header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__nav-links">
          <div className="img">
            <NavLink to={"/"} className="navbar__logo">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="nav-items">
            <NavLink to={"/"}>
              <a className="navbar-a" href="#">
                Home
              </a>
            </NavLink>
            <NavLink to={"/login"}>
              <a className="navbar-a" href="#">
                Login
              </a>
            </NavLink>
            <NavLink to={"/create-product"}>
              <a className="navbar-a" href="#">
                Create-product
              </a>
            </NavLink>
            <NavLink to={"/register"}>
              <a className="navbar-a" href="#">
                Register
              </a>
            </NavLink>
            <NavLink to={"/user"}>
              <a className="navbar-a" href="#">
                User
              </a>
            </NavLink>
          </div>
          <div className="icons">
            <IoSearchOutline className="icon" />
            <IoPersonOutline className="icon" />
            <FiShoppingCart className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
