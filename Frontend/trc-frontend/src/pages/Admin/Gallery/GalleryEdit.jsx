import React from "react";
// import "./BlogsEdit.css";
import { Link, Outlet, redirect, json } from "react-router-dom";
import { getAuthToken } from "../../../../util/auth";
import axios from "axios";

const GalleryEdit = () => {
  return (
    <div className="admin_blogs_container">
      <div className="admin_team_controls">
        <Link className="team_route_link" to="/admin/gallery">
          Gallery
        </Link>
        <Link className="team_route_link" to="/admin/gallery/new">
          Add Image
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default GalleryEdit;

export async function action({ request, params }) {
  const data = await request.formData();

  if (!data.get("id")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    id: data.get("id"),
  };

  console.log("here");

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post(
    `https://trc-iitpkd-backend.onrender.com/removeImage`,
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
      { error: true, message: "Could Not Remove Image" },
      { status: 500 }
    );
  }

  return redirect("/admin/gallery");
}
