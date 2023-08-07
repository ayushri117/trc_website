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
import "./TeamEdit.css";
import MemberCardAd from "./MemberCardAd";

const TeamEdit = () => {
  const data = useRouteLoaderData("team-edit");
  const navigate = useNavigate();

  // console.log(data.teamData);

  return (
    <>
      <Suspense fallback={<p style={{ color: "white" }}>Loading....</p>}>
        <Await resolve={data.auth}>
          {(token) => (token ? <></> : <Navigate to="/admin/login"></Navigate>)}
        </Await>
      </Suspense>
      <div className="admin_team_container">
        <div className="admin_team_controls">
          <Link className="team_route_link" to="/admin">
            Team
          </Link>
          <Link className="team_route_link" to="/admin/newMember">
            Add Member
          </Link>
        </div>
        <div className="TeamData_Container">
          <Suspense fallback={<p style={{ color: "white" }}>Loading....</p>}>
            <Await resolve={data.teamData}>
              {(loadedTeamData) =>
                // console.log(loadedTeamData.length);
                loadedTeamData.length !== 0 ? (
                  loadedTeamData.map((member) => (
                    <MemberCardAd
                      name={member.name}
                      role={member.role}
                      image={member.image}
                    ></MemberCardAd>
                  ))
                ) : (
                  <p style={{ color: "white" }}>No Team Member Found</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>
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

  const response = await axios.get("https://trc-iitpkd-backend.onrender.com/team", {
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
    teamData: teamLoader(),
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
    "https://trc-iitpkd-backend.onrender.com/removeMember",
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
