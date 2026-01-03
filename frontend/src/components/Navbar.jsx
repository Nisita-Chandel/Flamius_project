import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    setOpen(false); // close dropdown after click
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white font-sans">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LEFT LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-yellow-500 font-serif text-2xl tracking-wide"
        >
          🔥 <span>FLAMIUS</span>
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-widest text-gray-300">
          <Link to="/" className="hover:text-yellow-400 transition">MENU</Link>
          <Link to="/" className="hover:text-yellow-400 transition">ORDER</Link>
          <Link to="/" className="hover:text-yellow-400 transition">EXPERIENCE</Link>
          <Link to="/" className="hover:text-yellow-400 transition">ABOUT</Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* RESERVE BUTTON */}
          <button className="hidden sm:block bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition">
            RESERVE
          </button>

          {/* CONTACT ICON */}
          <div className="relative">
            <FaUserCircle
              size={28}
              onMouseEnter={() => setOpen(true)}
              className="text-yellow-500 hover:text-yellow-400 transition cursor-pointer"
            />

            {/* DROPDOWN (STAYS OPEN) */}
            {open && (
              <div className="absolute right-0 mt-4 w-60 bg-neutral-900
                              border border-yellow-500/20 rounded-xl
                              shadow-2xl overflow-hidden z-50">

                <div
                  onClick={() => handleNavigate("/login")}
                  className="px-5 py-4 hover:bg-yellow-500/10 cursor-pointer transition"
                >
                  <p className="text-sm font-semibold text-white">Sign In</p>
                  <p className="text-xs text-gray-400">Access your account</p>
                </div>

                <div
                  onClick={() => handleNavigate("/signup")}
                  className="px-5 py-4 hover:bg-yellow-500/10 cursor-pointer transition"
                >
                  <p className="text-sm font-semibold text-white">Sign Up</p>
                  <p className="text-xs text-gray-400">Create new account</p>
                </div>

                <div
                  onClick={() => handleNavigate("/admin")}
                  className="px-5 py-4 hover:bg-yellow-500/10 cursor-pointer transition"
                >
                  <p className="text-sm font-semibold text-white">Admin</p>
                  <p className="text-xs text-gray-400">Management panel</p>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* GOLD BORDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
