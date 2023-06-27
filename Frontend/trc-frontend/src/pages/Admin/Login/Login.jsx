import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login_Container">
      <form className="form_container">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
