import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MenuPage from "../pages/MenuPage";
import ExperiencePage from "../pages/ExperiencePage";
import AboutPage from "../pages/AboutPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminPage from "../pages/AdminPage";
import AdminVerificationPage from "../pages/AdminVerificationPage";
import AdminOrdersPage from "../pages/AdminOrdersPage";
import AdminDashboard from "../pages/AdminDashboard";
import OrderPage from "../pages/OrderPage";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "../components/ProtectedRoute";
import ReservationPage from "../pages/ReservationPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/verify" element={<AdminVerificationPage />} />
      <Route path="/admin/orders" element={<AdminOrdersPage />} />
      <Route path="/reservations" element={<ReservationPage />} />
      <Route path="/contact" element={<ContactPage />} />



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
