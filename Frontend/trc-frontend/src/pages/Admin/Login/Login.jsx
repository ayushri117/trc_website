import React from "react";
import "./Login.css";
import {
  Form,
  json,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import axios from "axios";
const Login = () => {
  const data = useActionData();
  const navigation = useNavigation();
  if (data) {
    console.log(data);
  }

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="login_Container">
      <h2>Log In</h2>
      {data && data.error && <p>{data.message}</p>}
      <Form method="post" className="form_container">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Loggin..." : "Login"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

export async function action({ request, params }) {
  const data = await request.formData();

  if (!data.get("email") || !data.get("password")) {
    return json(
      { error: true, message: "All feilds are Mandatory" },
      { status: 500 }
    );
  }

  const body = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.post("http://localhost:4000/login", body, {
    headers: headers,
  });

  console.log(response);

  if (response.status === 201 || response.status === 202) {
    return response.data;
  }

  if (!response.data.ok) {
    return json(
      { error: true, message: "Could Not Authenticate User" },
      { status: 500 }
    );
  }

  const token = response.data.token;

  console.log(token);

  localStorage.setItem("token", token);

  return redirect("/admin");
}
