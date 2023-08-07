import React from "react";
import Blog from "./Blog";
import {
  defer,
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

const Blogs = () => {
  const data = useLoaderData();
  console.log(data);

  if (data.blogData.length === 0) {
    return <h2 style={{ color: "white" }}>No Blogs Here</h2>;
  }
  return (
    <div className="admin_blogs">
      <AnimatePresence>
        {data.blogData.map((blog) => (
          <Blog data={blog}></Blog>
        ))}
      </AnimatePresence>
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

  const response = await axios.get("https://trc-iitpkd-backend.onrender.com/blogs", {
    headers: headers,
  });

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
//   export async function action({ request, params }) {
//     const data = await request.formData();

//     if (!data.get("heading") || !data.get("info")) {
//       return json(
//         { error: true, message: "All feilds are Mandatory" },
//         { status: 500 }
//       );
//     }

//     const body = {
//       heading: data.get("heading"),
//       info: data.get("info"),
//     };

//     const token = getAuthToken();

//     const headers = {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       Auth: token,
//     };

//     const response = await axios.post(
//       "http://localhost:4000/removeResource",
//       body,
//       {
//         headers: headers,
//       }
//     );

//     console.log(response);

//     if (response.status === 201 || response.status === 202) {
//       return response.data;
//     }

//     if (!response.data.ok) {
//       return json(
//         { error: true, message: "Could Not delete Resource" },
//         { status: 500 }
//       );
//     }

//     return redirect("/admin/resources");
//   }
