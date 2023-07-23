import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const BlogCard = ({ data }) => {
  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            ease: [0.6, 0.05, 0.01, 0.98],
            duration: 1.6,
          },
        }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogCard;
