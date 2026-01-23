import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // auto hide like login success
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      {/* ✅ TOP SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-green-600 text-white font-medium shadow-lg">
           Message sent successfully
        </div>
      )}

      {/* ❌ TOP ERROR MESSAGE */}
      {showError && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-red-600 text-white font-medium shadow-lg">
          ❌ Failed to send message
        </div>
      )}

      <section className="min-h-screen bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-[#f0b100] mb-4">
              Contact Flamius
            </h1>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Have a question, feedback, or special request? We’d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* CONTACT INFO */}
            <div className="space-y-6">
              <div className="bg-neutral-900/70 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-[#f0b100] font-semibold mb-2">📍 Location</h3>
                <p className="text-gray-400 text-sm">
                  Main Market, Balaghat, Madhya Pradesh
                </p>
              </div>

              <div className="bg-neutral-900/70 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-[#f0b100] font-semibold mb-2">📞 Phone</h3>
                <p className="text-gray-400 text-sm">+91 XXXX XXXX XX</p>
              </div>

              <div className="bg-neutral-900/70 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-[#f0b100] font-semibold mb-2">✉️ Email</h3>
                <p className="text-gray-400 text-sm">hello@flamius.com</p>
              </div>

              <div className="bg-neutral-900/70 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-[#f0b100] font-semibold mb-2">⏰ Opening Hours</h3>
                <p className="text-gray-400 text-sm">
                  Mon–Fri: 7AM – 11PM<br />
                  Sat–Sun: 8AM – 12AM
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-900/70 backdrop-blur p-8 md:p-10 rounded-2xl border border-yellow-500/20"
            >
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-600 to-yellow-400 hover:opacity-90 transition"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
