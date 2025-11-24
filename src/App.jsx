import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import AuthPage from "./Pages/AuthPage";
import Dashboard from "./Pages/Dashboard";
<<<<<<< HEAD
import Home from "./Pages/Home";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
=======
>>>>>>> 92b9da603238a2eb968b90c1858c69f76fea6b08

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
<<<<<<< HEAD
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
=======
      <Route path="/login" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> 92b9da603238a2eb968b90c1858c69f76fea6b08
    </Routes>
  );
}

export default App;
