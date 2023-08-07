import React from "react";
import { checkAuthToken, getAuthToken } from "../../../../util/auth";
import axios from "axios";
import {
  Await,
  Form,
  Link,
  defer,
  json,
  useLoaderData,
  useSubmit,
  redirect,
  useRouteLoaderData,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import ResourcerCardAd from "./ResourceCardAd";
import "./ResourceEdit.css";

const ResourcesEdit = () => {
  const data = useLoaderData();
  return (
    <>
      <Suspense fallback={<p style={{ color: "white" }}>Loading....</p>}>
        <Await resolve={data.auth}>
          {(token) => (token ? <></> : <Navigate to="/admin/login"></Navigate>)}
        </Await>
      </Suspense>
      <div className="admin_resource_container">
        <div className="admin_resource_controls">
          <Link className="resource_route_link" to="/admin/resources">
            Resource
          </Link>
          <Link
            className="resource_route_link"
            to="/admin/resources/newResource"
          >
            Add Resource
          </Link>
        </div>
        <Suspense fallback={<p style={{ color: "white" }}>Loading....</p>}>
          <Await resolve={data.resourceData}>
            {(loadedResourceData) =>
              // console.log(loadedTeamData.length);
              loadedResourceData.length !== 0 ? (
                loadedResourceData.map((resource) => (
                  <ResourcerCardAd
                    heading={resource.heading}
                    info={resource.info}
                    image={resource.image}
                  ></ResourcerCardAd>
                ))
              ) : (
                <p style={{ color: "white" }}>No Team Resource Found</p>
              )
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default ResourcesEdit;

export async function authCheck() {
  const token = getAuthToken();

  return token !== null;
}

export async function resourceLoader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get("https://trc-iitpkd-backend.onrender.com/resource", {
    headers: headers,
  });

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.resource;

  return resData;
}

export async function loader({ request, params }) {
  return defer({
    auth: await authCheck(),
    resourceData: resourceLoader(),
  });
}
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
  };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post(
    "https://trc-iitpkd-backend.onrender.com/removeResource",
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
      { error: true, message: "Could Not delete Resource" },
      { status: 500 }
    );
  }

  return redirect("/admin/resources");
}
