import React from "react";
import logo from "../assets/Logo2.png";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link
        className="logo_box"
        to="hero_container"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <img src={logo} className="logoImage" />
      </Link>
      <ul className="navbar__box">
        <li className="navbar_itemBox">
          <Link
            className="navbar__item"
            to="hero_container"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="navbar_itemBox">
          <Link
            className="navbar__item"
            to="about_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            ABOUT
          </Link>
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
          <Link
            className="navbar__item"
            to="team_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            TEAM
          </Link>
        </li>
        <li className="navbar_itemBox">
          <Link
            className="navbar__item"
            to="contact_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
