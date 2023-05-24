import React from "react";
import logo from "../assets/Logo2.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_box">
        <img src={logo} className="logoImage" />
      </div>
      <ul className="navbar__box">
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            HOME
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            ABOUT
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            RESOURCES
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            BLOGS
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            GALLERY
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            TEAM
          </a>
        </li>
        <li className="navbar_itemBox">
          <a href="" className="navbar__item">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
