import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="bg-[#EEEAFB] dark:bg-gray-800 px-6 py-2 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20">

        {/* LOGO */}
        <div className="shrink-0 flex items-center">
          <Link to="/"> {/* <-- Also make logo clickable to home */}
            <img src={logo} alt="Senify Logo" className="h-40 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full p-1 flex items-center gap-1">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-1.5 rounded-full flex items-center gap-1 text-sm transition
                ${theme === "light" ? "bg-purple-800 hover:bg-purple-900 text-white" : "text-gray-700 dark:text-gray-300"}`}
            >
              Light
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-1.5 rounded-full flex items-center gap-1 text-sm transition
                ${theme === "dark" ? "bg-purple-800 hover:bg-purple-900 text-white" : "text-gray-700 dark:text-gray-300"}`}
            >
              Dark
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <Link to="/login">
            <button className="bg-purple-800 text-white px-5 py-2 rounded-full hover:bg-purple-900 transition font-medium">
              Login
            </button>
          </Link>

          {/* SIGNUP BUTTON */}
          <Link to="/signup">
            <button className="bg-purple-800 text-white px-5 py-2 rounded-full hover:bg-purple-900 transition font-medium shadow-md">
              Sign Up
            </button>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;