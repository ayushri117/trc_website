import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../selector.module.css";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div style={{ paddingTop: "100px" }}>
      {blogs.map((item) => (
        <div key={item.keyId} className={styles.blogContainer}>
          <img
            src={item.previewImg}
            alt="blog Image"
            className={styles.blogImage}
          />
          <div className={styles.blogContent}>
            <div>
              <h2 className={styles.title}>{item.title}</h2>
            </div>
            <div className={styles.blogInfo}>
              <h6>{item.date}</h6>
              <h5>by:- {item.auther}</h5>
            </div>
            <div>
              <p className={styles.blogDescription}>{item.preview}</p>
              <Link to={`${item._id}`} className={styles.blogLink}>
                Know More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogVideo;
