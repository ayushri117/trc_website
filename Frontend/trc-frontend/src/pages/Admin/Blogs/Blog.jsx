import React from "react";
import { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Blog = ({ data }) => {
  return (
    <motion.div
      className="blog_box"
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: [0.6, 0.05, 0.01, 0.98],
          duration: 1.6,
        },
      }}
    >
      <h2 className="blog_title">{data.title}</h2>
      <div className="blog_subInfo">
        <h5 className="subinfo_text">Date - {data.date}</h5>
        <h5 className="subinfo_text"> by {data.auther}</h5>
      </div>
      <img className="blog_previewImage" src={data.previewImg} alt="" />
      <p className="blog_summary">{data.preview}</p>
      <Link className="blog_btn" to={`view/${data._id}`}>
        View
      </Link>
    </motion.div>
  );
};

export default Blog;
