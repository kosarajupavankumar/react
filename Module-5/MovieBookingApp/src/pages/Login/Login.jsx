import React, { useState } from "react";
import "./Login.css";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("UserId:", userId);
    console.log("Password", password);

    // Reset the form
    setUserId("");
    setPassword("");

    // Redirect to home page
    const SignInResponse = await userLogin({ userId, password });

    if (SignInResponse.status === 200) {
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container ">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label className="userId">UserId:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div>
          <label className="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>{" "}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
