import React from "react";
import {
  Link,
  Form,
  json,
  redirect,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";

const AddGallery = () => {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="admin_team_container">
      <div className="admin_team_box">
        <Form
          method="POST"
          //   action="/admin/newMember"
          className="admin_team_form"
        >
          <h1>Add Image</h1>
          {data && data.error && <p>{data.message}</p>}
          <input
            type="text"
            placeholder="Add Image Link*"
            className="team_form_input"
            name="image"
          />
          <button disabled={isSubmitting} className="team_form_button">
            {isSubmitting ? "Adding..." : "Add Member"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddGallery;

export async function action({ request, params }) {
  const data = await request.formData();
  if (!data.get("image")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    image: data.get("image"),
  };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post(
    "https://trc-iitpkd-backend.onrender.com/addImage",
    body,
    {
      headers: headers,
    }
  );

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

  return redirect("/admin/gallery");
}
