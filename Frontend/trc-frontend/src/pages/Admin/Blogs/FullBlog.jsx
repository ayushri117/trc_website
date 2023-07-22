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
} from "react-router-dom";

import axios from "axios";

const FullBlog = () => {
  const data = useLoaderData();
  const submit = useSubmit();

  console.log(data[0]);

  const deleteBlogHandler = () => {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      let id = data[0]._id;
      submit({ id }, { method: "POST", action: "/admin/blogs" });
    }
  };
  return (
    <div className="Full_Blog_Container">
      <h2 className="blog_title">{data[0].title}</h2>
      <div className="blog_subInfo">
        <h5 className="subinfo_text">Date - {data[0].date}</h5>
        <h5 className="subinfo_text"> by {data[0].auther}</h5>
      </div>
      {data[0].info.map((item) => {
        if (item.para) {
          return <p className="Full_Blog_para">{item.para}</p>;
        } else {
          return <img className="Full_Blog_img" src={item.img} alt="" />;
        }
      })}
      {/* <p className="Full_Blog_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        inventore impedit, nemo aut pariatur obcaecati adipisci a deleniti.
        Accusantium exercitationem amet aperiam ab placeat dolorum et?
        Exercitationem dignissimos quos enim quis suscipit optio ex est.
        Delectus ex laboriosam, quo pariatur sequi necessitatibus architecto aut
        voluptatibus eligendi voluptate ut velit minima iure quasi harum
        consequatur a accusamus praesentium, esse rem eius laborum placeat
        numquam temporibus! At labore et, nostrum ab error vero. Placeat vitae
        at consequatur reprehenderit neque quasi libero quaerat, repudiandae
        quibusdam molestiae provident autem nesciunt suscipit odio consequuntur.
        Fuga assumenda illo nam maxime molestiae, temporibus magni nemo esse ab
        dolorem qui placeat voluptas. Ut illum dolore alias, autem sit odit amet
        ratione expedita numquam, officiis reprehenderit ipsa cupiditate
        debitis?
      </p>
      <img
        className="Full_Blog_img"
        src="https://i.postimg.cc/zBm9pLLh/360-F-386078374-WDOvxz-Hm-UCsg0h3-Aufqbhtu-Wk-BKz8-Xp-U.jpg"
        alt=""
      /> */}
      <button className="Full_blog_btn" onClick={deleteBlogHandler}>
        Delete
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
