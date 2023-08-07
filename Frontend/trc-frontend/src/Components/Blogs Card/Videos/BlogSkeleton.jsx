import React from "react";
import Skeleton from "react-loading-skeleton";
import "./blogSkeleton.css";

const BlogSkeleton = () => {
  return (
    <div className="blog-skeleton">
      <Skeleton height={230}></Skeleton>
      <div className="blog-title-skeleton">
        <Skeleton style={{ marginTop: 30 }} height={20}></Skeleton>
        <Skeleton style={{ marginTop: 25 }} width={120}></Skeleton>
      </div>
      <div className="blog-title-skeleton">
        <Skeleton height={60} style={{ marginTop: 25 }}></Skeleton>
      </div>
      <Skeleton height={24} style={{ marginTop: 25 }} width={150}></Skeleton>
    </div>
  );
};

export default BlogSkeleton;
