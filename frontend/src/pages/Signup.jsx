import { useState } from "react";
import API from "../api/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await API.post("/auth/signup", { name, email, password });
      alert("Signup successful");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-2xl shadow-xl w-[350px] transition-transform hover:scale-105"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account 🍽️
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Password with REAL Eye */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>

          <input
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Create a password"
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Eye Icon */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 hover:text-blue-500"
          >
            {showPassword ? (
              <AiFillEyeInvisible size={22} />
            ) : (
              <AiFillEye size={22} />
            )}
          </button>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600
                     text-white py-2 rounded-lg font-semibold
                     hover:from-blue-600 hover:to-blue-700
                     hover:shadow-lg transition-all duration-300"
        >
          Signup
        </button>

        {/* Extra */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
