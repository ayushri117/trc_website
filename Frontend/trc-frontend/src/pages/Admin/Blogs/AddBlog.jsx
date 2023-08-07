import { useState } from "react";
import React from "react";
import "./AddBlog.css";
import {
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
} from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";
import { useEffect } from "react";

const AddBlog = () => {
  const [para, setPara] = useState(0);
  const [img, setImg] = useState(0);
  const [subHeading, setSubHeading] = useState(0);
  const [rescorceOption, setRecourceOption] = useState([]);

  const addPara = () => {
    setPara((prev) => prev + 1);
    let div = document.querySelector("#add_blog");
    let paraElement = document.createElement("textarea");
    paraElement.className = "add_blog_para";
    paraElement.name = "para" + `${para}`;
    paraElement.id = "p";
    paraElement.cols = "58";
    paraElement.rows = "10";
    div.appendChild(paraElement);
  };

  const addImage = () => {
    setImg((prev) => prev + 1);
    let div = document.querySelector("#add_blog");
    let imgInput = document.createElement("input");
    imgInput.type = "text";
    imgInput.placeholder = "add Image Link";
    imgInput.name = "image" + `${img}`;
    div.appendChild(imgInput);
  };

  const addSubHeading = () => {
    setSubHeading((prev) => prev + 1);
    let div = document.querySelector("#add_blog");
    let subHeadingInput = document.createElement("input");
    subHeadingInput.type = "text";
    subHeadingInput.placeholder = "Add Sub Heading";
    subHeadingInput.name = "subHeading" + `${subHeading}`;
    div.appendChild(subHeadingInput);
  };

  const removeHandler = () => {
    let div = document.querySelector("#add_blog");
    // console.log(div.lastChild.nodeName);
    if (div.lastChild.nodeName === "TEXTAREA") {
      setPara((prev) => prev - 1);
    } else if (div.lastChild.nodeName === "INPUT") {
      setImg((prev) => prev - 1);
    }
    div.removeChild(div.lastChild);

    // div.removeChild(div.lastChild);
  };

  useEffect(() => {
    getResources();
  }, []);

  const getResources = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const response = await axios.get("https://trc-iitpkd-backend.onrender.com/resource", {
      headers: headers,
    });

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

  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="Add_Blog_Container">
      {data && data.error && <p>{data.message}</p>}
      <Form className="blog_form" method="POST">
        <input type="text" name="title" placeholder="Title*" />
        <input type="text" name="date" placeholder="Date*" />
        <input type="text" name="auther" placeholder="Auther*" />
        <input type="text" name="previewImage" placeholder="Preview Image*" />
        <input
          type="number"
          name="order"
          id="order"
          placeholder="Add the Index of Blog"
        />
        <textarea
          type="text"
          name="preview"
          placeholder="Preview Paragraph*"
          cols={58}
          rows={10}
        />
        <input type="text" name="ytLink" placeholder="Youtube Link" />
        <select name="resource" id="resource" className="blog_dropdown">
          {rescorceOption.map((resource) => (
            <option value={`${resource.value}`}>{resource.name}</option>
          ))}
        </select>
        <div id="add_blog"></div>
        <button disabled={isSubmitting} className="team_form_button">
          {isSubmitting ? "Adding..." : "Add Blog"}
        </button>
      </Form>
      <div className="footer_btn">
        <button onClick={addSubHeading}>Add Sub Heading</button>
        <button onClick={addPara}>Add Paragraph</button>
        <button onClick={addImage}>Add Image</button>
        <button onClick={removeHandler}>Remove</button>
      </div>
    </div>
  );
};

export default AddBlog;

export async function action({ request, params }) {
  const data = await request.formData();
  // console.log(data.get("resource"));

  if (
    !data.get("title") ||
    !data.get("date") ||
    !data.get("auther") ||
    !data.get("previewImage") ||
    !data.get("preview")
  ) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }
  let body = {};
  let paraCount = 0;
  let imageCount = 0;
  for (let p of data) {
    let keyValue = p[0];
    body[keyValue] = data.get(keyValue);
    // console.log(name);
  }

  // console.log(body);

  //   const body = {
  //     name: data.get("name"),
  //     role: data.get("role"),
  //     image: data.get("imgLink"),
  //     link1: data.get("link1"),
  //     link2: data.get("link2"),
  //     link3: data.get("link3"),
  //   };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post("https://trc-iitpkd-backend.onrender.com/addBlog", body, {
    headers: headers,
  });

  console.log(response);

  if (response.status === 201 || response.status === 202) {
    return response.data;
  }

  if (!response.data.ok) {
    return json(
      { error: true, message: "Could Not Add Blog" },
      { status: 500 }
    );
  }

  return redirect("/admin/blogs");
}
