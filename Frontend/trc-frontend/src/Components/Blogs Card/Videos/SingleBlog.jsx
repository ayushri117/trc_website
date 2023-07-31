import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SingleBlog.css";
import { AnimatePresence, motion } from "framer-motion";

const SingleBlog = () => {
  let { state } = useLocation();
  const blog = state.blog;
  return (
    <AnimatePresence initial={true}>
      <div className="Single_Blog_Container">
        <div className="Single_Blog_Box">
          <motion.div
            initial={{
              x: 75,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.98],
                duration: 1.6,
              },
            }}
          >
            <Link className="Back_Link" to="..">
              Back To Home
            </Link>
          </motion.div>
          <motion.div style={{ overflow: "hidden" }}>
            <motion.h2
              className="Single_Blog_Heading"
              initial={{
                y: 75,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: [0.6, 0.01, 0.05, 0.98],
                  duration: 1.6,
                  delay: 0.1,
                },
              }}
            >
              {blog.order}
              {". "}
              {blog.title}
            </motion.h2>
          </motion.div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.98],
                duration: 1.6,
                delay: 0.3,
              },
            }}
            className="Single_Blog_Heading_Image"
            src={blog.previewImg}
            alt=""
          />
          {blog.info.map((item) => {
            if (item.para) {
              return (
                <motion.p
                  className="Single_Blog_Para"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.98],
                      duration: 1.6,
                      delay: 0.6,
                    },
                  }}
                >
                  {item.para}
                </motion.p>
              );
            } else if (item.subHeading) {
              return (
                <motion.h2
                  className="Single_Blog_SubHeading"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.98],
                      duration: 1.6,
                      delay: 0.6,
                    },
                  }}
                >
                  {item.subHeading}
                </motion.h2>
              );
            } else {
              return (
                <motion.img
                  className="Single_Blog_Image"
                  src={item.img}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, 0.05, 0.98],
                      duration: 1.6,
                      delay: 0.6,
                    },
                  }}
                />
              );
            }
          })}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default SingleBlog;
