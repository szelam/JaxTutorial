import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function PrivateRoute({ component: Component }) {
  const { token, login, logout } = useAuth();
  const [result, setResult] = useState(null);

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
