import React from "react";
import {
  Link,
  Form,
  json,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import "./AddResource.css";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";

const AddResource = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="admin_resource_container">
      <div className="admin_resource_controls">
        <Link className="resource_route_link" to="/admin/resources">
          Resource
        </Link>
        <Link className="resource_route_link" to="/admin/resources/newResource">
          Add Resource
        </Link>
      </div>
      <div className="admin_resource_box">
        <Form
          method="POST"
          //   action="/admin/newMember"
          className="admin_resource_form"
        >
          <h1>Add Member</h1>
          {data && data.error && <p>{data.message}</p>}
          <input
            type="text"
            placeholder="Heading"
            className="resource_form_input"
            name="heading"
          />
          <input
            type="text"
            placeholder="Info"
            name="info"
            className="resource_form_input"
          />
          <input
            type="text"
            placeholder="Image Link"
            name="imgLink"
            className="resource_form_input"
          />
          <input
            type="text"
            placeholder="social link 1"
            name="link1"
            className="resource_form_input"
          />
          <input
            type="text"
            placeholder="social link 2"
            name="link2"
            className="resource_form_input"
          />
          <button disabled={isSubmitting} className="resource_form_button">
            {isSubmitting ? "Adding..." : "Add Resource"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddResource;

export async function action({ request, params }) {
  const data = await request.formData();
  if (!data.get("heading") || !data.get("info")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    heading: data.get("heading"),
    info: data.get("info"),
    image: data.get("imgLink"),
    link1: data.get("link1"),
    link2: data.get("link2"),
  };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post("http://localhost:4000/addResource", body, {
    headers: headers,
  });

  console.log(response);

  if (response.status === 201 || response.status === 202) {
    return response.data;
  }

  if (!response.data.ok) {
    return json(
      { error: true, message: "Could Not Add Resource" },
      { status: 500 }
    );
  }

  return redirect("/admin/resources");
}
