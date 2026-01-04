import { Routes, Route } from "react-router-dom";
import OrderPage from "../pages/OrderPage";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AdminDashboard from "../pages/AdminDashboard";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute admin>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

      
      <Route
        path="/order"
        element={
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        }
      />

      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoutes;
