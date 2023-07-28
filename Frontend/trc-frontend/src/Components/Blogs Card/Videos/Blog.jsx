import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../selector.module.css";
import { useLoaderData, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./Blog.css";

const api = import.meta.env.VITE_NEWSKEY2;
const searchWord = "robotics";

const BlogVideo = () => {
  const pageRef = useRef(1);

  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        blogHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkResourceId = (blog) => {
    const location = useLocation();

    let path = location.pathname;
    let keyword = path.split("/");

    return blog.resourceRef === keyword[2];
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div style={{ paddingTop: "100px" }} className="Blogs_Main_Container">
      {blogs.filter(checkResourceId).map((item) => (
        <>
          <BlogCard data={item}></BlogCard>
        </>
      ))}
    </div>
  );
};

export default BlogVideo;
