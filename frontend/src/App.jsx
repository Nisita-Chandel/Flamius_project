import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
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
