import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: String,
  otpExpiry: Date,
});

export default mongoose.model("Admin", adminSchema);
