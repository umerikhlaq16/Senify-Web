import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
const [isLogin, setIsLogin] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleEmailAuth = async (e) => {
e.preventDefault();
try {
if (isLogin) {
await signInWithEmailAndPassword(auth, email, password);
} else {
await createUserWithEmailAndPassword(auth, email, password);
}
navigate("/dashboard");
} catch (err) {
alert(err.message);
}
};

const handleGoogle = async () => {
try {
await signInWithPopup(auth, googleProvider);
navigate("/dashboard");
} catch (err) {
alert(err.message);
}
};

return ( <div className="flex items-center justify-center min-h-screen bg-black px-4">
      {/* Outer Glassy Card with gradient spots */} 
      <div className="relative w-full max-w-6xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row p-8 gap-6">


    {/* Gradient Spots Overlay */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-72 h-72 bg-blue-300/40 rounded-full blur-3xl absolute -top-16 -left-16 animate-pulse"></div>
      <div className="w-96 h-96 bg-purple-300/30 rounded-full blur-3xl absolute -bottom-20 -right-20 animate-pulse"></div>
      <div className="w-64 h-64 bg-yellow-200/20 rounded-full blur-2xl absolute top-40 right-10 animate-pulse"></div>
    </div>

    {/* Left Side - Project Info */}
    <div className="md:w-1/2 flex flex-col justify-center text-gray-800 p-6 relative z-10">
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">Welcome to <span className="text-purple-600">ProjectName</span></h1>
      <p className="text-lg opacity-90 mb-4">
        This project helps you manage tasks efficiently and stay organized. Access your personalized dashboard, track progress, and collaborate seamlessly.
      </p>
      <p className="text-sm opacity-70">
        Experience the next level of productivity with an intuitive interface and smart features.
      </p>
    </div>

    {/* Right Side - Inner Solid Card for Auth */}
    <div className="md:w-1/2 bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center relative z-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {isLogin ? "Login" : "Create Account"}
      </h2>

      <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 transition-all shadow-md"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <button
        onClick={handleGoogle}
        className="mt-4 py-3 w-full rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 shadow-md transition-all"
      >
        Continue with Google
      </button>

      <p className="mt-4 text-gray-600 text-center text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span
          className="text-purple-600 cursor-pointer font-semibold hover:underline"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>

  </div>
</div>

);
};

export default AuthPage;
