import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      {/* ✅ TOAST NOTIFICATIONS */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* FIXED NAVBAR */}
      <Navbar />

      {/* PUSH CONTENT BELOW NAVBAR */}
      <div className="pt-20">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
