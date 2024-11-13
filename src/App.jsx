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
import { useAuthStore } from "./Components/Store/AuthStore"; // assuming this is where your store is defined

const App = () => {
  const { checkAuth, isCheckingAuth, isAuthenticated, user } = useAuthStore(); // Assuming you have a method to check authentication

  useEffect(() => {
    checkAuth(); // Trigger on page load/reload to check if the user is authenticated
  }, []);

  return (
    <Router>
      <Routes>
        {/* Publicly accessible homepage */}
        <Route path="/" element={<MainRoute />} />

        {/* Authentication-related routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

        {/* Protected Routes */}

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
