import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function PrivateRoute({ component: Component }) {
  const { token, login, logout } = useAuth();
  const [result, setResult] = useState(null);

  useEffect(() => {
    let inactivityTimer;
    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
      }, 2 * 60 * 1000); // 2 minutes
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");

    if (!token || expiry < new Date().getTime()) {
      logout();
      setResult(<Navigate to="/" replace />);
    } else {
      login(token);
      setResult(Component);
    }
  }, []);

  return result;
}

export default PrivateRoute;
