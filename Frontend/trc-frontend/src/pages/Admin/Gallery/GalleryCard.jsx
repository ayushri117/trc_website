import React from "react";
import { useSubmit } from "react-router-dom";

const GalleryCard = ({ data }) => {
  const submit = useSubmit();
  const galleryRemoveHandler = () => {
    const proceed = window.confirm("Are you sure?");
    let id = data._id;
    if (proceed) {
      submit({ id }, { method: "POST" });
    }
  };
  return (
    <div className="Gallery_Card">
      <img className="admin_resource_imagebox" src={data.image} alt="" />
      <button className="gallery_button_admin" onClick={galleryRemoveHandler}>
        Delete
      </button>
    </div>
  );
};

export default GalleryCard;
