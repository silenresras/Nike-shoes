import React, { useEffect } from "react";
import {BrowserRouter as Router,} from "react-router-dom";
import { useAuthStore } from "./Components/Store/AuthStore"; // assuming this is where your store is defined
import AppRoutes from "./route/routes";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // check auth on page load
  }, []);

  return (
    <Router>
      <AppRoutes /> {/* ✅ This includes admin, protected routes, etc. */}
    </Router>
  );
};

export default App;
