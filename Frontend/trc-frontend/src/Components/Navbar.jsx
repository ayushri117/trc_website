import logo from "../assets/logo.webp";
import { Link } from "react-scroll";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

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
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
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
          >
            TEAM
          </Link>
        </li>
        <li className="navbar_itemBox">
          <NavLink to="/resources" className="navbar__item">
            RESOURCES
          </NavLink>
        </li>
        <li className="navbar_itemBox">
          <NavLink to="/blogs" className="navbar__item">
            BLOGS
          </NavLink>
        </li>
        <li className="navbar_itemBox">
          <NavLink to="/gallery" className="navbar__item">
            GALLERY
          </NavLink>
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
    </motion.div>
  );
};

export default Navbar;
