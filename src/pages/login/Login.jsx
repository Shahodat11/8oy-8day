import React from "react";
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
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            value={formData.UserName}
            onChange={handleChange}
            name="UserName"
            type="text"
            placeholder="UserName"
          />
          <input
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
