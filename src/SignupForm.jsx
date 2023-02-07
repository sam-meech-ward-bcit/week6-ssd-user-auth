import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post("/api/signup", { email, password, displayName });
    console.log(result.data)
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
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="login-form__input"
        placeholder="Display Name"
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
}
