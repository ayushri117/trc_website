import logo from "../assets/logo.webp";
import { Link } from "react-scroll";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { color, motion } from "framer-motion";
import MenuPNG from "../assets/Menu.png";

const Navbar = () => {
  return (
    <motion.div
      className="navbar_container"
      variants={{
        hidden: {
          opacity: 0,
          y: -100,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.6,
            ease: [0.6, 0.01, 0.05, 0.98],
            delay: 0.8,
          },
        },
      }}
      initial="hidden"
      animate="animate"
    >
      <input
        type="checkbox"
        id="check"
        onChange={() => {
          let navbar = document.querySelector(".navbar__box");
          console.log(navbar.style.left);
          if (navbar.style.left === "-100%") {
            navbar.style.left = "0%";
          } else {
            navbar.style.left = "-100%";
          }
        }}
      />
      <label for="check" className="checkbtn">
        <img src={MenuPNG} alt="" />
      </label>
      <Link
        className="logo_box"
        to="hero_container"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <img src={logo} className="logoImage" />
      </Link>
      <ul className="navbar__box">
        <li className="navbar_itemBox">
          <NavLink
            className="navbar__item"
            to="/"
            // spy={true}
            // smooth={true}
            // offset={-50}
            // duration={500}
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            HOME
          </NavLink>
        </li>
        <li className="navbar_itemBox">
          <Link
            className="navbar__item"
            to="about_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            ABOUT
          </Link>
        </li>

        <li className="navbar_itemBox">
          <Link
            className="navbar__item"
            to="team_container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            TEAM
          </Link>
        </li>
        <li className="navbar_itemBox">
          <NavLink
            to="/resources"
            className="navbar__item"
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            RESOURCES
          </NavLink>
        </li>
        {/* <li className="navbar_itemBox">
          <NavLink to="/blogs" className="navbar__item">
            BLOGS
          </NavLink>
        </li> */}
        <li className="navbar_itemBox">
          <NavLink
            to="/gallery"
            className="navbar__item"
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            GALLERY
          </NavLink>
        </li>
        <li className="navbar_itemBox">
          <NavLink
            className="navbar__item"
            to="/contact"
            onClick={() => {
              let navbar = document.querySelector(".navbar__box");
              navbar.style.left = "-100%";
            }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
