import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "./Store/AuthStore";

const ProtectedRoute = ({ adminOnly = false }) => {
  const { user, isAuthenticated, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <div>Loading...</div>; // or a spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
