import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./pages/ScrollToTop";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ TOAST NOTIFICATIONS */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* FIXED NAVBAR */}
      <Navbar />
      <ScrollToTop />   {/* ✅ allowed here */}

      {/* PUSH CONTENT BELOW NAVBAR */}
      <div className="pt-20">
        <AppRoutes />
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
