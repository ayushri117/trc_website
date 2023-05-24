import React from "react";
import "./MemberCard.css";

import { Phone } from "feather-icons-react/build/IconComponents";
import { Mail } from "feather-icons-react/build/IconComponents";
import { Linkedin } from "feather-icons-react/build/IconComponents";

const MemberCard = ({ profileImage, name, role }) => {
  return (
    <div className="memCard_container">
      <div className="memImageBox">
        <img src={profileImage} className="mem_Image" />
      </div>
      <div className="mem_info">
        <h4 className="mem_Name">{name}</h4>
        <h5 className="mem_Role">{role}</h5>
      </div>

      <div className="mem_links">
        <Phone className="mem_icon"></Phone>
        <Mail className="mem_icon"></Mail>
        <Linkedin className="mem_icon"></Linkedin>
      </div>
    </div>
  );
};

export default MemberCard;
