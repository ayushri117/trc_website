import React, { useState } from "react";
import "./FullBlog.css";
import {
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
  useLoaderData,
  useSubmit,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

const FullBlog = () => {
  const data = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();

  // console.log(data[0]);

  const deleteBlogHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      let id = data[0]._id;
      submit({ id }, { method: "POST", action: "/admin/blogs" });
    }
  };
  return (
    <div className="Full_Blog_Container">
      <h2 className="blog_title">
        {" "}
        {data[0].order}
        {". "}
        {data[0].title}
      </h2>
      <div className="blog_subInfo">
        <h5 className="subinfo_text">Date - {data[0].date}</h5>
        <h5 className="subinfo_text"> by {data[0].auther}</h5>
      </div>
      {data[0].info.map((item) => {
        if (item.para) {
          return <p className="Full_Blog_para">{item.para}</p>;
        } else if (item.subHeading) {
          return <h2 className="Full_Blog_subHeading">{item.subHeading}</h2>;
        } else {
          return <img className="Full_Blog_img" src={item.img} alt="" />;
        }
      })}
      <button className="Full_blog_btn" onClick={deleteBlogHandler}>
        Delete
      </button>
      <button className="Full_blog_btn" onClick={() => navigate("edit")}>
        Edit
      </button>
    </div>
  );
};

export default FullBlog;

export async function loader({ params }) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const body = {
    id: params.blogid,
  };

  const response = await axios.post(`http://localhost:4000/blog`, body, {
    headers: headers,
  });

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.blog;

  return resData;
}
