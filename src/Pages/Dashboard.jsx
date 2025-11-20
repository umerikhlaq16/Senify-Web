import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white gap-6">
      <h1 className="text-4xl font-bold">Welcome to Dashboard!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 py-2 px-6 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
