import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;

    setSubscribed(true);
    setEmail("");

    // auto hide message
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <>
      {/* ✅ SUBSCRIBE SUCCESS MESSAGE (LOGIN STYLE) */}
      {subscribed && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg bg-green-600 text-white font-medium shadow-lg">
          Subscribed successfully
        </div>
      )}

      <footer className="bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

          {/* BRAND */}
          <div>
            <h3 className="text-[#f0b100] font-serif text-2xl mb-4">🔥 FLAMIUS</h3>
            <p className="text-gray-400 text-sm">
              Experience the art of premium coffee crafted with precision and passion.
            </p>

            <div className="flex gap-4 mt-6">
              {["f", "in", "x"].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-neutral-900 text-[#f0b100] flex items-center justify-center hover:bg-[#f0b100] hover:text-black transition cursor-pointer"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[#b08a2e] mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#f0b100]">Home</Link></li>
              <li><Link to="/menu" className="hover:text-[#f0b100]">Menu</Link></li>
              <li><Link to="/about" className="hover:text-[#f0b100]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#f0b100]">Contact</Link></li>
              <li><Link to="/reservations" className="hover:text-[#f0b100]">Reservations</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-[#b08a2e] mb-4">CONTACT INFO</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Main Market, Bhopal, MP</li>
              <li>📞 +91 XXXX XXXX XX</li>
              <li>✉️ hello@flamius.com</li>
            </ul>
          </div>

          {/* OPENING HOURS */}
          <div>
            <h4 className="text-[#b08a2e] mb-4">OPENING HOURS</h4>
            <p className="text-gray-400 text-sm">
              Mon–Fri: <span className="text-[#f0b100]">7AM – 11PM</span><br />
              Sat–Sun: <span className="text-[#f0b100]">8AM – 12AM</span><br />
              Holidays: <span className="text-[#f0b100]">9AM – 10PM</span>
            </p>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="text-center mt-16 px-6">
          <h4 className="text-[#b08a2e] tracking-widest mb-3">STAY UPDATED</h4>
          <p className="text-gray-400 text-sm mb-6">
            Subscribe to get special offers, free giveaways, and exclusive deals
          </p>

          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-yellow-500/20 focus:outline-none text-white"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-12 pb-6">
          © {new Date().getFullYear()} Flamius. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
