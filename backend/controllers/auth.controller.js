import crypto from "crypto";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";



export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 2. Check duplicate email
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "Email already registered. Please login.",
      });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Signup Backend Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
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
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ message: "Token invalid or expired" });
  }

  user.password = password;
  user.resetToken = undefined;
  user.resetTokenExpire = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};
