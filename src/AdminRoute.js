import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function AdminRoute({ children }) {
  const { currentUser } = useAuth();

  return (currentUser && currentUser.email==="india@gmail.com") ? children : <Navigate to="/login" />;
}