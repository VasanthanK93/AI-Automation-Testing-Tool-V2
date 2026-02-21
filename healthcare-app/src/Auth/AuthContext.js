import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const login = (username, password) => {

    if (username === "doctor1" && password === "Doctor@123") {
      setUser({ role: "DOCTOR", name: "Dr. Smith" });
      return true;
    }

    if (username === "admin1" && password === "Admin@123") {
      setUser({ role: "ADMIN", name: "Admin User" });
      return true;
    }

    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}