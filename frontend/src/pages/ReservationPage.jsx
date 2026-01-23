import { useState } from "react";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
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
      const res = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "1",
          message: "",
        });

        // auto hide like login success
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 3000);
      }
    } catch (err) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <>
      {/* ✅ LOGIN-STYLE SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-green-600 text-white font-medium shadow-lg">
          Reservation submitted successfully
        </div>
      )}

      {/* ❌ ERROR MESSAGE */}
      {showError && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-red-600 text-white font-medium shadow-lg">
          ❌ Failed to submit reservation
        </div>
      )}

      <section className="min-h-screen bg-black text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif text-[#f0b100] mb-4">
              Reserve Your Table
            </h1>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Book your perfect coffee moment at Flamius. We’ll take care of the rest.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-neutral-900/70 backdrop-blur rounded-2xl p-8 md:p-12 border border-yellow-500/20"
          >
            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />

              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="input"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                  <option key={g} value={g}>
                    {g} Guest{g > 1 && "s"}
                  </option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="input"
              />

              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="input"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Special request (optional)"
              value={formData.message}
              onChange={handleChange}
              className="input mt-6 resize-none"
            />

            <button
              type="submit"
              className="w-full mt-8 py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-yellow-600 to-yellow-400 hover:opacity-90 transition"
            >
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ReservationPage;
