import React from "react";
import { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  return (
    <div className="blog_box">
      <h2 className="blog_title">{data.title}</h2>
      <div className="blog_subInfo">
        <h5 className="subinfo_text">Date - {data.date}</h5>
        <h5 className="subinfo_text"> by {data.auther}</h5>
      </div>
      <p className="blog_summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        distinctio quae, nesciunt velit sequi totam ad optio repellat!
        Recusandae dignissimos nostrum voluptas ratione porro ipsa ad corporis,
        facere cumque ullam minus nam veniam odio quidem aliquid adipisci
        placeat ipsum dicta minima alias fugit repellendus corrupti? Amet quas
        aperiam aliquam inventore.
      </p>
      <Link className="blog_btn" to={`view/${data._id}`}>
        View
      </Link>
    </div>
  );
};

export default Blog;
