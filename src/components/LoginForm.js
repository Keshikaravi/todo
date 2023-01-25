import React from "react";
import "./loginForm.css";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  //   let history = useHistory();
  //   history.push("/TodoList");
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="cover">
        <h2>Login</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        {/* <button className="button">Login</button> */}
        <div className="login-btn" onClick={() => navigate("/todolist")}>
          Login
        </div>
        {/* <p className="text">Forgot password</p>
        <div className="alt-login">
          <div>Reset</div>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
