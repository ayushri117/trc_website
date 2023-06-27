import logo from "../../../assets/logo.webp";
import "./AdminNavbar.css";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="adnavbar_container">
      <div className="adlogo_box">
        <img src={logo} className="adlogoImage" />
      </div>
      <ul className="adnavbar__box">
        <li className="adnavbar_itemBox">
          <NavLink className="adnavbar__item" to="">
            HOME
          </NavLink>
        </li>
        <li className="adnavbar_itemBox">
          <NavLink className="adnavbar__item" to="team">
            TEAM
          </NavLink>
        </li>
        <li className="adnavbar_itemBox">
          <NavLink to="resources" className="adnavbar__item">
            RESOURCES
          </NavLink>
        </li>
        <li className="adnavbar_itemBox">
          <NavLink to="blogs" className="adnavbar__item">
            BLOGS
          </NavLink>
        </li>
        <li className="adnavbar_itemBox">
          <NavLink to="gallery" className="adnavbar__item">
            GALLERY
          </NavLink>
        </li>
        {/* <li className="adnavbar_itemBox">
          <NavLink className="adnavbar__item" to="contact">
            CONTACT
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default AdminNavbar;
