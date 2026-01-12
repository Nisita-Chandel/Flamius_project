import API from "../api/api";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

/* ===== REUSABLE FADE-UP ===== */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await API.post("/auth/login", {
        email,
        password,
      });

      // ✅ Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful! 🎉");

      setTimeout(() => {
        navigate("/order");
      }, 800);
    } catch (error) {
      toast.error("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-black px-4 text-white overflow-hidden">

      <FadeUp>
        <div className="w-full max-w-md bg-neutral-900/80 backdrop-blur-md
                        border border-yellow-500/20 rounded-2xl
                        p-8 shadow-2xl">

          <p className="text-yellow-500 tracking-widest text-sm mb-2 text-center">
            ✦ WELCOME BACK
          </p>

          <h2 className="text-3xl font-serif text-center mb-2">
            Enter <span className="text-yellow-500">Culinary Haven</span>
          </h2>

          <p className="text-gray-400 text-center text-sm mb-8 leading-relaxed">
            Sign in to continue your journey of exceptional dining experiences
            and personalized service.
          </p>

          {/* ================= FORM ================= */}
          <form onSubmit={submitHandler} className="space-y-5">

            <FadeUp delay={0.1}>
              <div>
                <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
                  <FaEnvelope /> EMAIL ADDRESS
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800
                             border border-yellow-500/30
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
                  <FaLock /> PASSWORD
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800
                             border border-yellow-500/30
                             focus:border-yellow-500 focus:outline-none
                             transition"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r
                           from-yellow-600 to-yellow-400
                           text-black py-3 rounded-lg font-semibold
                           transition"
              >
                {loading ? "SIGNING IN..." : "ENTER CULINARY HAVEN →"}
              </motion.button>
            </FadeUp>

          </form>

          <FadeUp delay={0.4}>
            <a
              href="/signup"
              className="block text-center mt-6 border border-yellow-500
                         text-yellow-500 py-2 rounded-lg
                         hover:bg-yellow-500 hover:text-black transition"
            >
              CREATE YOUR ACCOUNT
            </a>
          </FadeUp>

        </div>
      </FadeUp>
    </div>
  );
};

export default Login;
