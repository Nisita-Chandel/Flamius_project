const sendEmail = async (to, otp) => {
  try {
    console.log("Sending email to:", to);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Flamius Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Your Admin Verification Code",
      html: `<h1>Your OTP is ${otp}</h1>`,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error.message);
    throw error;
  }
};
