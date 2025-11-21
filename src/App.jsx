import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
