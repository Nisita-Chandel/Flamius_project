import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setMessage("Passwords do not match");
    }

    if (password.length < 6) {
      return setMessage("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const { data } = await API.post(
        `/auth/reset-password/${token}`,
        {
          password,
        }
      );

      setMessage(data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage(
        error?.response?.data?.message ||
          "Invalid or expired reset link"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111b21] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#202c33] rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Reset Password
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Enter your new password below.
        </p>

        <form
          onSubmit={submitHandler}
          className="space-y-5"
        >
          <div>
            <label className="block text-gray-300 mb-2">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              required
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-[#111b21] border border-[#2a3942] text-white px-4 py-3 rounded-lg outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              required
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full bg-[#111b21] border border-[#2a3942] text-white px-4 py-3 rounded-lg outline-none focus:border-green-500"
            />
          </div>

          {message && (
            <div
              className={`text-center text-sm font-medium ${
                message.toLowerCase().includes("success") ||
                message.toLowerCase().includes("reset")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-green-400 hover:underline"
          >
            Back to Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;