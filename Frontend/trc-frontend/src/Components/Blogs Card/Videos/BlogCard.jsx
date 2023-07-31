import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const BlogCard = ({ data, blogVariants }) => {
  return (
    <AnimatePresence initial={true}>
      <Link
        to={`${data._id}`}
        state={{ blog: data }}
        className="Blog_Card_Link"
      >
        <motion.div
          className="Blog_Card_Container"
          // initial={{ opacity: 0, scale: 0 }}
          // animate={{
          //   opacity: 1,
          //   scale: 1,
          //   transition: {
          //     ease: [0.6, 0.01, 0.05, 0.98],
          //     duration: 1.6,
          //   },
          // }}
          variants={blogVariants}
        >
          <motion.img src={data.previewImg} alt="" />
          <div className="Blog_Card_Content">
            <h3>
              {data.order}
              {". "}
              {data.title}
            </h3>
            <h5>{data.date}</h5>
            <p className="cuttoff-text">{data.preview}</p>
            <h4>by {data.auther}</h4>
          </div>
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default BlogCard;
