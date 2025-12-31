import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post(`/auth/reset-password/${token}`, {
        password,
      });
      setMessage(data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch {
      setMessage("Invalid or expired link");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "30px" }}>
      <h2>Reset Password</h2>

      <form onSubmit={submitHandler}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Reset</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
