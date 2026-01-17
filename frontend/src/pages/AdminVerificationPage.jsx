import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminVerificationPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);

  /* ================= AUTO FOCUS FIRST INPUT ================= */
  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0].focus();
    }
  }, []);

  /* ================= OTP INPUT HANDLER ================= */
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  /* ================= VERIFY OTP ================= */
  const handleVerifyOtp = async () => {
    if (!email) {
      alert("Email not found. Please try again.");
      navigate("/admin");
      return;
    }

    if (otp.join("").length !== 6) {
      alert("Please enter complete OTP");
      return;
    }

    if (loading) return;

    try {
      setLoading(true);

      console.log("📧 Verifying OTP for:", email);
      console.log("🔢 OTP:", otp.join(""));

      const res = await axios.post(
        "http://localhost:5000/api/admin/verify-otp",
        {
          email,
          otp: otp.join(""),
        }
      );

      console.log("✅ OTP Verified:", res.data);
      navigate("/admin/orders");
    } catch (error) {
      console.error("❌ OTP Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* ================= LEFT CARD ================= */}
        <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 shadow-2xl">

          {/* Change Email */}
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center gap-2 text-[#b08a2e] text-sm mb-6 hover:underline"
          >
            ← Change Email
          </button>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center">
              ✉
            </div>
          </div>

          <h2 className="text-2xl font-serif text-center mb-2">
            Verification Required
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Enter the 6-digit code sent to your email
          </p>

          {/* Email */}
          <div className="bg-black border border-zinc-800 rounded-xl p-4 text-center mb-6">
            <p className="text-sm text-gray-400">Verification code sent to</p>
            <p className="text-[#b08a2e] font-medium">
              {email || "Not available"}
            </p>
          </div>

          {/* OTP INPUT */}
          <label className="block text-[#b08a2e] text-sm mb-2">
            ENTER VERIFICATION CODE
          </label>

          <div className="flex justify-between gap-3 mb-6">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-14 bg-black border border-zinc-700 rounded-lg
                           text-center text-xl
                           focus:outline-none focus:border-[#f0b100]"
              />
            ))}
          </div>

          <p className="text-sm text-gray-400 mb-8">
            {6 - otp.filter(Boolean).length} digits remaining
          </p>

          {/* Button */}
          <button
            disabled={loading}
            onClick={handleVerifyOtp}
            className="w-full bg-[#f0b100] text-black py-4 rounded-xl
                       font-semibold flex items-center justify-center gap-2
                       hover:opacity-90 disabled:opacity-60"
          >
            🔒 {loading ? "VERIFYING..." : "SECURE LOGIN"}
          </button>
        </div>

        {/* ================= RIGHT INFO ================= */}
        <div>
          <h2 className="text-4xl font-serif mb-6">
            Secure <span className="text-[#b08a2e]">Verification</span>
          </h2>

          <p className="text-gray-400 mb-10 max-w-lg">
            Your security is our priority. We've sent a one-time verification
            code to ensure that only authorized personnel can access the
            Flamius admin system.
          </p>

          <div className="space-y-6">
            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 flex gap-4">
              <span className="text-[#b08a2e] text-xl">⏱</span>
              <div>
                <h4 className="font-semibold mb-1">Time-Sensitive Code</h4>
                <p className="text-gray-400 text-sm">
                  Your verification code expires in 10 minutes for enhanced security.
                </p>
              </div>
            </div>

            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 flex gap-4">
              <span className="text-[#b08a2e] text-xl">🔐</span>
              <div>
                <h4 className="font-semibold mb-1">One-Time Use</h4>
                <p className="text-gray-400 text-sm">
                  Each code can only be used once. Request a new code if needed.
                </p>
              </div>
            </div>

            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-xl p-6 flex gap-4">
              <span className="text-[#b08a2e] text-xl">🛡</span>
              <div>
                <h4 className="font-semibold mb-1">Enterprise Protection</h4>
                <p className="text-gray-400 text-sm">
                  Multi-layer security ensures your admin access remains protected.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminVerificationPage;
