import { useState } from "react";
import API from "../api/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const password = e.target.password.value;

    try {
      await API.post("/auth/signup", { name, email, mobile, password });
      alert("Signup successful 🎉");
    } catch (error) {
      console.error("Signup Error:", error.response?.data);
      alert(error.response?.data?.message || "Signup failed ❌");
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-neutral-900/80 backdrop-blur-md
                      border border-yellow-500/20 rounded-2xl p-8 shadow-2xl">

        {/* HEADER */}
        <p className="text-yellow-500 tracking-widest text-sm mb-2 text-center">
          ✦ JOIN THE EXPERIENCE
        </p>

        <h2 className="text-3xl font-serif text-center mb-2">
          Begin Your <span className="text-yellow-500">Culinary Journey</span>
        </h2>

        <p className="text-gray-400 text-center text-sm mb-8">
          Create your account and unlock exclusive dining experiences,
          personalized recommendations, and priority reservations.
        </p>

        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaUser /> FULL NAME
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800
                         border border-yellow-500/20
                         focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaEnvelope /> EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800
                         border border-yellow-500/20
                         focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* MOBILE */}
          <div>
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaPhone /> MOBILE NUMBER
            </label>
            <input
              type="text"
              name="mobile"
              required
              placeholder="Enter your mobile number"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800
                         border border-yellow-500/20
                         focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaLock /> PASSWORD
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 pr-12 rounded-lg bg-neutral-800
                         border border-yellow-500/20
                         focus:border-yellow-500 focus:outline-none"
            />

            {/* EYE ICON */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-yellow-500 hover:text-yellow-400"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={22} />
              ) : (
                <AiFillEye size={22} />
              )}
            </button>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-yellow-400
                       text-black py-3 rounded-lg font-semibold
                       hover:opacity-90 transition"
          >
            BEGIN CULINARY JOURNEY →
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
