const LoginForm = ({ switchToSignup }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 text-center">Login</h2>

      <p className="text-center text-sm text-gray-500 mt-1">
        Don't have an account?{" "}
        <span className="text-purple-600 cursor-pointer" onClick={switchToSignup}>
          Sign Up
        </span>
      </p>

      <form className="mt-6 space-y-4">
        <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg" />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
          Login
        </button>
      </form>
    </>
  );
};


export default LoginForm;
