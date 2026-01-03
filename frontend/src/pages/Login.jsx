import API from "../api/api";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(false);

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

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Welcome to Flamius ✨");
    } catch (error) {
      alert("Invalid credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white">

      {/* CARD */}
      <div className="w-full max-w-md bg-neutral-900/80 backdrop-blur-md
                      border border-yellow-500/20 rounded-2xl
                      p-8 shadow-2xl">

        {/* HEADER */}
       {/* HEADER */}
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


        {/* FORM */}
        <form onSubmit={submitHandler} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaEnvelope /> EMAIL ADDRESS
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800
                         border border-yellow-500/30
                         focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="flex items-center gap-2 text-yellow-500 text-sm mb-1">
              <FaLock /> PASSWORD
            </label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800
                         border border-yellow-500/30
                         focus:border-yellow-500 focus:outline-none"
            />
          </div>

          {/* FORGOT */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-yellow-500 hover:underline"
            >
              FORGOT YOUR PASSWORD?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-yellow-600 to-yellow-400
                       text-black py-3 rounded-lg font-semibold
                       hover:opacity-90 transition"
          >
            {loading ? "SIGNING IN..." : "ENTER CULINARY HAVEN →"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="text-center text-gray-400 text-sm mt-8">
          New to our culinary experience?
        </div>

        {/* CREATE ACCOUNT */}
        <a
          href="/signup"
          className="block text-center mt-4 border border-yellow-500
                     text-yellow-500 py-2 rounded-lg
                     hover:bg-yellow-500 hover:text-black transition"
        >
          CREATE YOUR ACCOUNT
        </a>
      </div>
    </div>
  );
};

export default Login;
