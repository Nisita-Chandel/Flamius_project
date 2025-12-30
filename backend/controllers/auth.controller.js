import crypto from "crypto";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

export const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.json({
    token: generateToken(user._id, user.role),
    user,
  });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    token: generateToken(user._id, user.role),
    user,
  });
};

export const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ message: "Email sent if exists" });

  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = token;
  user.resetTokenExpire = Date.now() + 10 * 60 * 1000;
  await user.save();

  const link = `http://localhost:5173/reset-password/${token}`;
  await sendEmail(
    user.email,
    "Reset Password",
    `<a href="${link}">Reset Password</a>`
  );

  res.json({ message: "Reset email sent" });
};
