import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [carparkId, setCarparkId] = useState(null);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
    localStorage.setItem("expiry", new Date().getTime() + 60 * 2 * 3600);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
  };

  const setCarParkId = (id) => {
    setCarparkId(id);
  };

  return (
    <AuthContext.Provider
      value={{ token, carparkId, login, logout, setCarParkId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
