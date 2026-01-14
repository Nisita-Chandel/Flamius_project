import { useEffect, useState } from "react";
import API from "../api/api";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ===== REUSABLE FADE-UP COMPONENT ===== */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/products").then((res) => setFoods(res.data));
  }, []);

  const placeOrder = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    await API.post("/orders", { items: cart, total });
    alert("Order placed successfully 🍽️");
    setCart([]);
  };

  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="min-h-screen pt-[70px] relative">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-yellow-500 tracking-widest mb-4 text-sm">
              ✦ FINE DINING EXPERIENCE
            </p>

            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Savor Exceptional <br />
              <span className="text-yellow-500">Cuisine</span>
            </h1>

            <p className="text-gray-400 max-w-md mb-8">
              Experience culinary excellence with master chefs and exquisite flavors.
            </p>

            <div className="flex gap-4 mb-10">
              <button
                onClick={() => navigate("/menu")}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                View Menu →
              </button>
              <button className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
                Reserve Table
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-10 text-yellow-500">
              <div>
                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-xs tracking-widest text-gray-400">DAILY GUESTS</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-xs tracking-widest text-gray-400">MENU ITEMS</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">4.8 ★</h3>
                <p className="text-xs tracking-widest text-gray-400">RATING</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://i.pinimg.com/736x/2f/e3/f1/2fe3f1145d2ab03d90f71160760486fd.jpg"
              alt="Fine Dining"
              className="rounded-3xl shadow-2xl w-full max-w-[620px] h-[620px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 px-6">
        <FadeUp>
          <h2 className="text-center text-4xl font-serif mb-16">
            What Our Guests <br />
            <span className="text-yellow-500">Say</span>
          </h2>
        </FadeUp>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["Priya Sharma", "Food Critic"],
            ["Rajesh Kumar", "Regular Guest"],
            ["Anita Desai", "Wedding Planner"],
          ].map(([name, role], i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="bg-neutral-900 p-8 rounded-2xl hover:-translate-y-2 transition">
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="italic text-gray-300 mb-6">
                  "An unforgettable fine dining experience."
                </p>
                <h4 className="font-serif">{name}</h4>
                <p className="text-yellow-500 text-sm">{role}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= VISIT US ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <FadeUp>
            <div>
              <p className="text-yellow-500 tracking-widest mb-3">VISIT US</p>
              <h2 className="text-4xl font-serif mb-6">
                Fine Dining in <span className="text-yellow-500">Balaghat</span>
              </h2>

              <p className="text-gray-400 mb-10 max-w-md">
                Elegant dining for celebrations, meetings, and special moments.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  📍 <span>Main Market, Balaghat, MP</span>
                </div>
                <div className="flex gap-4">
                  🕒 <span>12:00 PM – 11:00 PM</span>
                </div>
                <div className="flex gap-4">
                  📞 <span>+91 XXXX XXXX XX</span>
                </div>
              </div>

              <button className="mt-10 bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition">
                MAKE RESERVATION
              </button>
            </div>
          </FadeUp>
        </div>

        {/* FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute right-[80px] bottom-24 bg-neutral-900/90 border border-yellow-500/20 rounded-2xl p-6 w-[320px]"
        >
          <p className="text-yellow-500 mb-2">★★★★★</p>
          <p className="italic text-gray-200">
            "Best fine dining experience!"
          </p>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
           {/* ================= FOOTER (IMAGE MATCHED) ================= */}
           <footer className="bg-black text-gray-400 pt-24 px-6 border-t border-yellow-500/10">

{/* TOP FOOTER */}
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

  {/* BRAND */}
  <div>
    <h3 className="text-yellow-500 font-serif text-2xl mb-4 flex items-center gap-2">
      🔥 FLAMIUS
    </h3>
    <p className="text-sm leading-relaxed">
      Experience the art of premium coffee crafted with precision and passion.
      From single-origin brews to signature blends, we bring the world’s finest
      coffee to Balaghat.
    </p>

    {/* SOCIAL ICONS */}
    <div className="flex gap-4 mt-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-neutral-900 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
        f
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-neutral-900 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
        in
      </div>
      <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-neutral-900 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
        x
      </div>
    </div>
  </div>

  {/* QUICK LINKS */}
  <div>
    <h4 className="text-yellow-500 tracking-widest mb-4">QUICK LINKS</h4>
    <ul className="space-y-3 text-sm">
      <li className="hover:text-yellow-500 cursor-pointer"
      onClick={() => navigate("/")}
      >Home</li>
      <li className="hover:text-yellow-500 cursor-pointer"
      onClick={() => navigate("/menu")}
      >Menu</li>
      <li className="hover:text-yellow-500 cursor-pointer"
      onClick={() => navigate("/about")}
      >About</li>
      <li className="hover:text-yellow-500 cursor-pointer"
      onClick={() => navigate("/order")}
      >Order</li>
      <li className="hover:text-yellow-500 cursor-pointer"
      onClick={() => navigate("/experience")}
      >Experience</li>
    </ul>
  </div>

  {/* CONTACT INFO */}
  <div>
    <h4 className="text-yellow-500 tracking-widest mb-4">CONTACT INFO</h4>
    <ul className="space-y-4 text-sm">
      <li>📍 Main Market, Balaghat, MP 481001</li>
      <li>📞 +91 XXXX XXXX XX</li>
      <li>✉️ hello@flamius.com</li>
    </ul>
  </div>

  {/* OPENING HOURS */}
  <div>
    <h4 className="text-yellow-500 tracking-widest mb-4">OPENING HOURS</h4>
    <ul className="space-y-3 text-sm">
      <li>
        Monday – Friday <br />
        <span className="text-yellow-500">7:00 AM – 11:00 PM</span>
      </li>
      <li>
        Saturday – Sunday <br />
        <span className="text-yellow-500">8:00 AM – 12:00 AM</span>
      </li>
      <li>
        Holidays <br />
        <span className="text-yellow-500">9:00 AM – 10:00 PM</span>
      </li>
    </ul>
  </div>
</div>

{/* DIVIDER */}
<div className="border-t border-yellow-500/10 mt-20"></div>

{/* STAY UPDATED */}
<div className="mt-16 text-center">
  <h4 className="text-yellow-500 tracking-widest mb-3">
    STAY UPDATED
  </h4>
  <p className="text-sm mb-6">
    Subscribe to get special offers, free giveaways, and exclusive deals
  </p>

  <div className="flex justify-center gap-4 max-w-md mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-lg bg-neutral-900 
                 border border-yellow-500/20 focus:outline-none"
    />
    <button className="bg-gradient-to-r from-yellow-600 to-yellow-400
                       text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
      SUBSCRIBE
    </button>
  </div>
</div>

{/* COPYRIGHT */}
<div className="text-center text-xs text-gray-500 mt-12 pb-6">
  © {new Date().getFullYear()} Flamius. All rights reserved.
</div>
</footer>

    </div>
  );
};

export default Home;
