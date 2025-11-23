import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
