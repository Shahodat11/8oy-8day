import React from "react";
import "../login/login.css";
import axios from "../../api/index";
import { useGetInputValue } from "../../hooks/useGetInputValue";

const initialState = {
  UserName: "",
  password: "",
};

const Login = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("/auth/sign-in", formData).then((res) => {
      localStorage.setItem("x-auth-token", res.data.data.token);
    });
  };
  return (
    <div className="container">
      <div>
        <form onSubmit={handleLogin}>
          <h4 className="login-h2">Login</h4>
          <input
            className="login-form"
            value={formData.UserName}
            onChange={handleChange}
            name="UserName"
            type="text"
            placeholder="UserName"
          />
          <input
            className="login-form"
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <button className="login-bottom">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
