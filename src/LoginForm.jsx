import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("/api/login", { email, password });
    // console.log(result.data)
    const token = result.data.token 
    updateToken(token)
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-form__input"
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-form__input"
        placeholder="Password"
        required
      />
      <button type="submit" className="login-form__submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
