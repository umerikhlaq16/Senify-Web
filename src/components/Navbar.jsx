import React from "react";
import logo from "../assets/images/logo.png";

 function Navbar() {
  return (
    <nav className="bg-[#EEEAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 flex items-center">
  <img
  src={logo}
  alt="Senify Logo"
  className="h-40 w-auto"
/>
</div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#talent-showcase"
              className="hover:text-purple-800 font-sm "
            >
              Talent Showcase
            </a>
            <a
              href="#family-feed"
              className="hover:text-purple-800 font-sm "
            >
              Family Feed
            </a>
            <a
              href="#challenges"
              className="hover:text-purple-800 font-sm "
            >
              Micro Challenges
            </a>
            <a
              href="#volunteers"
              className="hover:text-purple-800 font-sm "
            >
              Volunteers
            </a>
            <a
              href="#ai-highlights"
              className="hover:text-purple-800 font-sm "
            >
              AI Story
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => alert("Mobile menu toggle")}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;