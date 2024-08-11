import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

export default PrivateRoutes;
