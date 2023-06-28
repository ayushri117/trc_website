import React from "react";
import {
  Link,
  Form,
  json,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import "./AddMember.css";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";

const AddMember = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="admin_team_container">
      <div className="admin_team_controls">
        <Link className="team_route_link" to="/admin">
          Team
        </Link>
        <Link className="team_route_link" to="/admin/newMember">
          Add Member
        </Link>
      </div>
      <div className="admin_team_box">
        <Form
          method="POST"
          //   action="/admin/newMember"
          className="admin_team_form"
        >
          <h1>Add Member</h1>
          {data && data.error && <p>{data.message}</p>}
          <input
            type="text"
            placeholder="Name"
            className="team_form_input"
            name="name"
          />
          <input
            type="text"
            placeholder="Role"
            name="role"
            className="team_form_input"
          />
          <input
            type="text"
            placeholder="Image Link"
            name="imgLink"
            className="team_form_input"
          />
          <input
            type="text"
            placeholder="social link 1"
            name="link1"
            className="team_form_input"
          />
          <input
            type="text"
            placeholder="social link 2"
            name="link2"
            className="team_form_input"
          />
          <input
            type="text"
            placeholder="social link 3"
            name="link3"
            className="team_form_input"
          />
          <button disabled={isSubmitting} className="team_form_button">
            {isSubmitting ? "Adding..." : "Add Member"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddMember;

export async function action({ request, params }) {
  const data = await request.formData();
  if (!data.get("name") || !data.get("role")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    name: data.get("name"),
    role: data.get("role"),
    image: data.get("imgLink"),
    link1: data.get("link1"),
    link2: data.get("link2"),
    link3: data.get("link3"),
  };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post("http://localhost:4000/addMember", body, {
    headers: headers,
  });

  console.log(response);

  if (response.status === 201 || response.status === 202) {
    return response.data;
  }

  if (!response.data.ok) {
    return json(
      { error: true, message: "Could Not Add member" },
      { status: 500 }
    );
  }

  return redirect("/admin");
}
