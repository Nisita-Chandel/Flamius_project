import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

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
          <Link to="/" className="hover:text-yellow-400 transition">
            MENU
          </Link>
          <Link to="/" className="hover:text-yellow-400 transition">
            ORDER
          </Link>
          <Link to="/" className="hover:text-yellow-400 transition">
            EXPERIENCE
          </Link>
          <Link to="/" className="hover:text-yellow-400 transition">
            ABOUT
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* RESERVE BUTTON */}
          <button className="hidden sm:block bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition">
            RESERVE
          </button>

          {/* AUTH / PROFILE */}
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-gray-300 hover:text-yellow-400 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-300 hover:text-yellow-400 transition text-sm"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="text-yellow-400 hover:text-yellow-300 transition text-sm"
                >
                  Admin
                </Link>
              )}

              <button onClick={logoutHandler}>
                <FaUserCircle
                  size={26}
                  className="text-yellow-500 hover:text-yellow-400 transition"
                />
              </button>
            </>
          )}
        </div>
      </div>

      {/* GOLD BOTTOM BORDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </nav>
  );
};

export default Navbar;
