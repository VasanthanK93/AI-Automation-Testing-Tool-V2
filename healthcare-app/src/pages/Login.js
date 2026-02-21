// src/pages/Login.js

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

export default function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Simulate API delay
    setTimeout(() => {
      const success = login(username, password);

      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid username or password");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f1f5f9"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          width: "320px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
        data-testid="login-form"
      >
        <h2 data-testid="login-title">
          Healthcare Login
        </h2>

        <input
          name="username"
          placeholder="Username"
          style={{ width: "100%", marginBottom: "15px" }}
          data-testid="username-input"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          style={{ width: "100%", marginBottom: "15px" }}
          data-testid="password-input"
        />

        <button
          type="submit"
          style={{ width: "100%", padding: "8px" }}
          data-testid="login-button"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p
            style={{ color: "red", marginTop: "10px" }}
            data-testid="login-error"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}