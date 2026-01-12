import { useState } from "react";
import API from "../api/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

/* ===== REUSABLE FADE-UP ANIMATION ===== */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

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
    <div className="min-h-screen flex items-center justify-center
                    bg-black text-white px-4 overflow-hidden">

      <FadeUp>
        <div className="w-full max-w-md bg-neutral-900/80 backdrop-blur-md
                        border border-yellow-500/20 rounded-2xl
                        p-8 shadow-2xl">

          {/* ================= HEADER ================= */}
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

          {/* ================= FORM ================= */}
          <form onSubmit={submitHandler} className="space-y-5">

            <FadeUp delay={0.1}>
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
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
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
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
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
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
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
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />

                {/* EYE ICON */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-11 text-yellow-500
                             hover:text-yellow-400 transition"
                >
                  {showPassword ? (
                    <AiFillEyeInvisible size={22} />
                  ) : (
                    <AiFillEye size={22} />
                  )}
                </button>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full mt-6 bg-gradient-to-r
                           from-yellow-600 to-yellow-400
                           text-black py-3 rounded-lg font-semibold
                           transition"
              >
                BEGIN CULINARY JOURNEY →
              </motion.button>
            </FadeUp>
          </form>

          {/* ================= FOOTER ================= */}
          <FadeUp delay={0.6}>
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-yellow-500 hover:underline">
                Sign In
              </a>
            </p>
          </FadeUp>

        </div>
      </FadeUp>
    </div>
  );
};

export default Signup;
