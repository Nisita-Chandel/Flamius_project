import nodemailer from "nodemailer";

const sendEmail = async (to, otp) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email credentials missing in .env");
    }

    console.log("📨 Sending email to:", to);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    await transporter.sendMail({
      from: `"Flamius Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Flamius Admin Verification Code",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Admin Verification</h2>
          <p>Your OTP is:</p>
          <h1 style="color:#f0b100">${otp}</h1>
          <p>This code expires in 15 minutes.</p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email error:", error.message);
    throw error;
  }
};

export default sendEmail;
