import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <Link
      to={`${data._id}`}
      state={{ blog: data }}
      className="Blog_Card_Container"
    >
      <img src={data.previewImg} alt="" />
      <div className="Blog_Card_Content">
        <h3>{data.title}</h3>
        <h5>{data.date}</h5>
        <p className="cuttoff-text">{data.preview}</p>
        <h4>by {data.auther}</h4>
      </div>
    </Link>
  );
};

export default BlogCard;
