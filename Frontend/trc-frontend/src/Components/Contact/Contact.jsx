import React from "react";
import "./Contact.css";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
} from "feather-icons-react/build/IconComponents";

const Contact = () => {
  return (
    <div className="contact_container">
      {/* <h2 className="contact_heading">CONTACT</h2> */}
      <div className="contact_box">
        <div className="contact_socialMedia">
          <Facebook className="contact_linkIcon"></Facebook>
          <Linkedin className="contact_linkIcon"></Linkedin>
          <Instagram className="contact_linkIcon"></Instagram>
          <Mail className="contact_linkIcon"></Mail>
        </div>
        <p className="footer_text">Copyright © Robotics Club, IIT Palakkad</p>
      </div>
    </div>
  );
};

export default Contact;
