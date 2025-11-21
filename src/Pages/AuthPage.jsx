import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#eeeafb] flex items-center justify-center px-4">
      
      {/* Outer Rounded Card */}
      <div className="relative w-full max-w-6xl bg-white/60 backdrop-blur-xl shadow-xl 
        rounded-3xl p-10 flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* === Gradient Spot Background === */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute w-96 h-96 bg-purple-400/40 blur-[120px] top-10 left-10"></div>
          <div className="absolute w-80 h-80 bg-green-300/40 blur-[130px] bottom-10 left-20"></div>
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className="relative z-10 md:w-1/2 p-4">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Reconnecting Hearts.<br /> Empowering Lives.
          </h1>

          <div className="mt-10 space-y-8">
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                Stay Connected With Loved Ones
              </h3>
              <p className="text-gray-700 mt-2 max-w-sm">
                Help families stay emotionally connected with elderly and disabled individuals even when life gets busy.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                Empower Talent & Stories
              </h3>
              <p className="text-gray-700 mt-2 max-w-sm">
                Provide a platform for those ignored by society to express themselves and showcase their talent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Volunteers Making Real Impact
              </h3>
              <p className="text-gray-700 mt-2 max-w-sm">
                Allow volunteers to support elderly and disabled users creating a more caring and connected community.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE – ONLY CALL FORM COMPONENT */}
        <div className="relative z-10 w-full sm:w-3/4 md:w-1/2">
          {/* Simple form container without extra bg/shadow */}
          <div className="w-full max-w-md mx-auto">
            
            {isLogin ? (
              <LoginForm switchToSignup={() => setIsLogin(false)} />
            ) : (
              <SignupForm switchToLogin={() => setIsLogin(true)} />
            )}
          </div> 

          </div>
        </div>
      </div>
  );
};

export default AuthPage;
