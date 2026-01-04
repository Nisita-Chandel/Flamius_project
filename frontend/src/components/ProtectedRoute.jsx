import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, admin = false }) => {
  const storedUser = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  // ❌ Not logged in
  if (!storedUser || !token) {
    return <Navigate to="/login" replace />;
  }

  let user;
  try {
    user = JSON.parse(storedUser);
  } catch (error) {
    // corrupted data
    localStorage.clear();
    return <Navigate to="/login" replace />;
  }

  // ❌ Admin route but user is not admin
  if (admin && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Authorized
  return children;
};

export default ProtectedRoute;
