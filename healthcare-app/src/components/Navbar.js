// src/components/Navbar.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

export default function Navbar() {

  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#1e293b",
        color: "white",
        display: "flex",
        justifyContent: "space-between"
      }}
      data-testid="navbar"
    >
      <div>
        <strong>Enterprise Healthcare System</strong>
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          to="/dashboard"
          style={{ color: "white" }}
          data-testid="nav-dashboard"
        >
          Dashboard
        </Link>

        {user.role === "DOCTOR" && (
          <Link
            to="/patients"
            style={{ color: "white" }}
            data-testid="nav-patients"
          >
            Patients
          </Link>
        )}

        {user.role === "ADMIN" && (
          <Link
            to="/appointments"
            style={{ color: "white" }}
            data-testid="nav-appointments"
          >
            Appointments
          </Link>
        )}

        <button
          onClick={logout}
          style={{
            background: "transparent",
            border: "1px solid white",
            color: "white",
            cursor: "pointer"
          }}
          data-testid="logout-button"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}