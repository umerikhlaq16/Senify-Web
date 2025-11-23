import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/login");
          return 100;
        }
        return prev + 1;
      });
    }, 30);
  }, [navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/welcome-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative flex flex-col items-center justify-center z-10">
        <motion.h1
          className="text-5xl font-extrabold mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My App Logo
        </motion.h1>
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-blue-400 to-indigo-500"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;