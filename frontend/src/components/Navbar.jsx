import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
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

          {/* CONTACT ICON + DROPDOWN (FIXED HOVER) */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* ICON */}
            <FaUserCircle
              size={28}
              className="text-yellow-500 hover:text-yellow-400 transition cursor-pointer"
            />

            {/* DROPDOWN MENU */}
            {open && (
              <div className="absolute right-0 mt-4 w-60 bg-neutral-900
                              border border-yellow-500/20 rounded-xl
                              shadow-2xl overflow-hidden z-50">

                {!user && (
                  <>
                    <Link
                      to="/login"
                      className="block px-5 py-4 hover:bg-yellow-500/10 transition"
                    >
                      <p className="text-sm font-semibold text-white">Sign In</p>
                      <p className="text-xs text-gray-400">
                        Access your account
                      </p>
                    </Link>

                    <Link
                      to="/signup"
                      className="block px-5 py-4 hover:bg-yellow-500/10 transition"
                    >
                      <p className="text-sm font-semibold text-white">Sign Up</p>
                      <p className="text-xs text-gray-400">
                        Create new account
                      </p>
                    </Link>
                  </>
                )}

                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    className="block px-5 py-4 hover:bg-yellow-500/10 transition"
                  >
                    <p className="text-sm font-semibold text-white">Admin</p>
                    <p className="text-xs text-gray-400">
                      Management panel
                    </p>
                  </Link>
                )}

                {user && (
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-5 py-4 hover:bg-yellow-500/10 transition"
                  >
                    <p className="text-sm font-semibold text-white">Logout</p>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* GOLD BOTTOM BORDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
