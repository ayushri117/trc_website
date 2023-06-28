import React from "react";
import { useSubmit } from "react-router-dom";

const MemberCardAd = ({ name, role, image }) => {
  const submit = useSubmit();

  const deleteMemberHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit({ name, role }, { method: "POST" });
    }
  };
  return (
    <div className="admin_team_box">
      <div className="admin_team_imagebox">
        <img src={image} alt="" />
      </div>
      <div className="admin_team_info">
        <h3 className="admin_team_text">{name}</h3>
        <h3 className="admin_team_text">{role}</h3>
        <button onClick={deleteMemberHandler}>Delete</button>
      </div>
    </div>
  );
};

export default MemberCardAd;
