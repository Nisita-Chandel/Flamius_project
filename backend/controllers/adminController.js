import Admin from "../models/Admin.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

/* ================= SEND OTP ================= */
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({ message: "Email is required" });

    // generate 6-digit otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // hash otp
    const hashedOtp = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    // ⏳ OTP valid for 15 minutes
    const expiry = Date.now() + 15 * 60 * 1000;

    let admin = await Admin.findOne({ email });
    if (!admin) {
      admin = await Admin.create({ email });
    }

    admin.otp = hashedOtp;
    admin.otpExpiry = expiry;
    await admin.save();

    console.log("📧 OTP sent to:", email);
    console.log("🔢 OTP (dev only):", otp);

    await sendEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.error("Send OTP error:", error.message);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

/* ================= VERIFY OTP ================= */
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp)
      return res.status(400).json({ message: "Email and OTP required" });

    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(404).json({ message: "Admin not found" });

    // ⏳ check expiry
    if (!admin.otpExpiry || admin.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // hash user otp
    const hashedOtp = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    if (hashedOtp !== admin.otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // clear otp after success
    admin.otp = null;
    admin.otpExpiry = null;
    await admin.save();

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Verify OTP error:", error.message);
    res.status(500).json({ message: "OTP verification failed" });
  }
};
