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
} from "react-router-dom";
import { Suspense } from "react";
import "./TeamEdit.css";
import MemberCardAd from "./MemberCardAd";

const TeamEdit = () => {
  const data = useLoaderData();

  // console.log(data);

  return (
    <>
      <Suspense>
        <Await resolve={data.auth}></Await>
      </Suspense>
      <Suspense fallback={<p style={{ color: "white" }}>Loading....</p>}>
        <Await resolve={data.teamData}>
          <div className="admin_team_container">
            <div className="admin_team_controls">
              <Link className="team_route_link" to="/admin">
                Team
              </Link>
              <Link className="team_route_link" to="/admin/newMember">
                Add Member
              </Link>
            </div>
            {/* <h1>Team Members</h1> */}
            {data.teamData.map((member) => (
              <MemberCardAd
                name={member.name}
                role={member.role}
                image={member.image}
              ></MemberCardAd>
            ))}
          </div>
        </Await>
      </Suspense>
    </>
  );
};

export default TeamEdit;

export async function authCheck() {
  const token = getAuthToken();

  return token !== null;
}

export async function teamLoader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get("http://localhost:4000/team", {
    headers: headers,
  });

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.team;

  return resData;
}

export async function loader({ request, params }) {
  return defer({
    auth: await authCheck(),
    teamData: await teamLoader(),
  });
}
export async function action({ request, params }) {
  const data = await request.formData();
  console.log(data);
  if (!data.get("name") || !data.get("role")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    name: data.get("name"),
    role: data.get("role"),
  };

  const token = getAuthToken();

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Auth: token,
  };

  const response = await axios.post(
    "http://localhost:4000/removeMember",
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
      { error: true, message: "Could Not delete member" },
      { status: 500 }
    );
  }

  return redirect("/admin");
}
