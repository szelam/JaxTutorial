import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function PrivateRoute({ component: Component }) {
  const { token } = useAuth();

  return token ? Component : <Navigate to="/" />;
}

export default PrivateRoute;
