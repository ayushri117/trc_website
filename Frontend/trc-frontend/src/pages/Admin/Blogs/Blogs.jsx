import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import {
  defer,
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

const Blogs = () => {
  const data = useLoaderData();
  const [rescorceOption, setRecourceOption] = useState([]);
  const [selectedResource, setSelectedResource] = useState();

  if (data.blogData.length === 0) {
    return <h2 style={{ color: "white" }}>No Blogs Here</h2>;
  }

  useEffect(() => {
    getResources();
  }, []);

  const getResources = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const response = await axios.get(
      "https://trc-iitpkd-backend.onrender.com/resource",
      {
        headers: headers,
      }
    );

    let option = [];
    for (let i of response.data.resource) {
      let temp = {
        value: i._id,
        name: i.heading,
      };
      // console.log(temp);
      option.push(temp);
    }

    setRecourceOption(option);
  };

  const checkResourceId = (blog) => {
    return blog.resourceRef === selectedResource;
  };

  const changeSelectedResHandler = (e) => {
    setSelectedResource(e.target.value);
  };
  return (
    <div className="admin_blogs_Box">
      <select
        name="resource"
        id="resourceInput"
        className="blog_dropdown"
        onChange={changeSelectedResHandler}
        style={{ width: "200px" }}
      >
        {rescorceOption.map((resource) => (
          <option value={`${resource.value}`}>{resource.name}</option>
        ))}
      </select>
      <div className="admin_blogs">
        <AnimatePresence>
          {data.blogData.filter(checkResourceId).map((blog) => (
            <Blog data={blog}></Blog>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blogs;

export async function authCheck() {
  const token = getAuthToken();

  return token !== null;
}

export async function blogLoader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get(
    "https://trc-iitpkd-backend.onrender.com/blogs",
    {
      headers: headers,
    }
  );

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.blog;

  return resData;
}

export async function loader({ request, params }) {
  return defer({
    auth: await authCheck(),
    blogData: await blogLoader(),
  });
}
