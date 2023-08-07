import React, { useState, useEffect, useRef, Suspense } from "react";
import axios from "axios";
import { useLoaderData, useLocation, defer, Await } from "react-router-dom";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./Blog.css";
import { animate, motion } from "framer-motion";
import { blogLoader } from "../../../pages/Admin/Blogs/Blogs";
import BlogSkeleton from "./BlogSkeleton";

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

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const blogVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
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
      <Suspense
        fallback={
          <>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
          </>
        }
      >
        <Await resolve={blogs.blogData}>
          {(loadedBlogs) =>
            loadedBlogs.filter(checkResourceId).length !== 0 ? (
              loadedBlogs
                .filter(checkResourceId)
                .map((item) => (
                  <BlogCard data={item} blogVariants={blogVariants}></BlogCard>
                ))
            ) : (
              <p style={{ color: "white" }}>No Resources Found</p>
            )
          }
        </Await>
      </Suspense>
    </motion.div>
  );
};

export default BlogVideo;

export async function loader({ request, params }) {
  return defer({
    blogData: await blogLoader(),
  });
}
