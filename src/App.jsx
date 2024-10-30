import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MainRoute from "./route/MainRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import EmailVerification from "./pages/EmailVerification";
import { useAuthStore } from "./Components/Store/AuthStore";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

const RedirectAuthenticatedUsers = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainRoute />
            </ProtectedRoute>
          }
        />

        {/*other pages */}
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUsers>
              <SignUp />
            </RedirectAuthenticatedUsers>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUsers>
              <Login />
            </RedirectAuthenticatedUsers>
          }
        />
        <Route
          path="/verify-email"
          element={
            <RedirectAuthenticatedUsers>
              <EmailVerification />
            </RedirectAuthenticatedUsers>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUsers>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUsers>
          }
        />
        <Route
          path="/reset-password"
          element={
            <RedirectAuthenticatedUsers>
              <ResetPasswordPage />
            </RedirectAuthenticatedUsers>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUsers>
              <ResetPasswordPage />
            </RedirectAuthenticatedUsers>
          }
        />
        {/*catch all routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
