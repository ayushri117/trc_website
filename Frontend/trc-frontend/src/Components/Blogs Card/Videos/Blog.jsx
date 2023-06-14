import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from '../selector.module.css';

const api = import.meta.env.VITE_NEWSKEY2;
const searchWord = "robotics";

const BlogVideo = () => {
  const [blogs, setBlogs] = useState([]);
  const pageRef = useRef(1);

  useEffect(() => {
    blogHandler();
  }, []);

  const blogHandler = async () => {
    try {
      const baseUrl = `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=publishedAt&pageSize=10&page=${pageRef.current}&apiKey=${api}`;

      const response = await axios.get(baseUrl);

      const results = response.data.articles.map((items) => ({
        ...items,
        keyId: `${items.source.id} ${items.source.name}`,
      }));

      setBlogs((prevBlog) => [...prevBlog, ...results]);
      pageRef.current = pageRef.current + 1;

      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <div style={{paddingTop:'100px'}}>
      {blogs.map((item) => (
        <div key={item.keyId} className={styles.blogContainer}>
          <img src={item.urlToImage} alt="blog Image" className={styles.blogImage} />
          <div className={styles.blogContent}>            
            <div>
              <h2 className={styles.blogTitle}>{item.title}</h2>
            </div>
            <div className={styles.blogInfo}>
              <h6>{item.publishedAt.split("T")[0]}</h6>
              <h5>by:- {item.author}</h5>
            </div>
            <div>
              <p className={styles.blogDescription}>{item.description}</p>
              <a href={item.url} target="_blank" rel="noreferrer" className={styles.blogLink}>
                Know More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogVideo;
