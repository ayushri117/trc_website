import React from "react";
import { useSubmit } from "react-router-dom";

const ResourcerCardAd = ({ heading, info, image }) => {
  const submit = useSubmit();

  const deleteResourceHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit({ heading, info }, { method: "POST" });
    }
  };
  return (
    <div className="admin_resource_box">
      <div className="admin_resource_imagebox">
        <img src={image} alt="" />
      </div>
      <div className="admin_resource_info">
        <h3 className="admin_resource_text">{heading}</h3>
        <h3 className="admin_resource_text">{info}</h3>
        <button onClick={deleteResourceHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ResourcerCardAd;
