import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  let { state } = useLocation();
  const blog = state.blog;
  return (
    <div className="Single_Blog_Container">
      <div className="Single_Blog_Box">
        <Link className="Back_Link" to="..">
          Back To Home
        </Link>
        <h2 className="Single_Blog_Heading">
          {blog.order}
          {". "}
          {blog.title}
        </h2>
        <img
          className="Single_Blog_Heading_Image"
          src={blog.previewImg}
          alt=""
        />
        {blog.info.map((item) => {
          if (item.para) {
            return <p className="Single_Blog_Para">{item.para}</p>;
          } else if (item.subHeading) {
            return (
              <h2 className="Single_Blog_SubHeading">{item.subHeading}</h2>
            );
          } else {
            return <img className="Single_Blog_Image" src={item.img} alt="" />;
          }
        })}
      </div>
    </div>
  );
};

export default SingleBlog;
