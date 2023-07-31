import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../selector.module.css";
import { useLoaderData, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./Blog.css";
import { animate, motion } from "framer-motion";

const api = import.meta.env.VITE_NEWSKEY2;
const searchWord = "robotics";

const BlogVideo = () => {
  const pageRef = useRef(1);
  const [showBlog, setShowBlog] = useState(true);

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

  const location = useLocation();

  let path = location.pathname;
  let keyword = path.split("/");

  let showblog = blogs.filter(checkResourceId);

  if (blogs.filter(checkResourceId).length === 0) {
    return (
      <div style={{ paddingTop: "100px" }} className="Blogs_Main_Container">
        <p className="No-Blogs">No Blogs for this Resource {":("}</p>
      </div>
    );
  }

  blogs.sort((a, b) => a.order - b.order);

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const blogVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.98],
        duration: 1.6,
      },
    },
  };

  return (
    <motion.div
      style={{ paddingTop: "100px" }}
      className="Blogs_Main_Container"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {blogs.filter(checkResourceId).map((item) => (
        <BlogCard data={item} blogVariants={blogVariants}></BlogCard>
      ))}
    </motion.div>
  );
};

export default BlogVideo;
