import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MainRoute from "./route/MainRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainRoute />} />

        {/*other pages */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
