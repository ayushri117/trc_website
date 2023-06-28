import logo from "../../../assets/logo.webp";
import "./AdminNavbar.css";
import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

const AdminNavbar = () => {
  const token = useRouteLoaderData("admin-root");
  return (
    <div className="adnavbar_container">
      <div className="adlogo_box">
        <img src={logo} className="adlogoImage" />
      </div>
      <ul className="adnavbar__box">
        <li className="adnavbar_itemBox">
          <NavLink className="adnavbar__item" to="">
            Team
          </NavLink>
        </li>
        <li className="adnavbar_itemBox">
          <NavLink className="adnavbar__item" to="faculty">
            Faculty
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
        {token && (
          <li className="adnavbar_itemBox">
            <Form action="logout" method="POST">
              <button style={{ backgroundColor: "red" }}>Logout</button>
            </Form>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AdminNavbar;
