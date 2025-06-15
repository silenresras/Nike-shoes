// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./route/routes";
import { useAuthStore } from "./Components/Store/AuthStore";

const App = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
    </>
  );
};

export default App;
