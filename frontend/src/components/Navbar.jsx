import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          🍽️ Flamius
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-red-400 transition">
            Home
          </Link>

          {!user && (
            <>
              <Link to="/login" className="hover:text-red-400 transition">
                Login
              </Link>
              <Link to="/signup" className="hover:text-red-400 transition">
                Signup
              </Link>
            </>
          )}

          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="px-4 py-1 rounded bg-red-500 hover:bg-red-600 transition"
            >
              Admin
            </Link>
          )}

          {user && (
            <button
              onClick={logoutHandler}
              className="px-4 py-1 rounded bg-red-500 hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
