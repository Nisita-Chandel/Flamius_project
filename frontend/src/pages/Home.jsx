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
      <footer className="pt-24 px-6 border-t border-yellow-500/10">
        <FadeUp>
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-yellow-500 font-serif text-2xl mb-4">🔥 FLAMIUS</h3>
              <p className="text-sm">
                Premium dining experience crafted with passion.
              </p>
            </div>

            <div>
              <h4 className="text-yellow-500 mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
              </ul>
            </div>

            <div>
              <h4 className="text-yellow-500 mb-4">CONTACT</h4>
              <p>Balaghat, MP</p>
              <p>+91 XXXX XXXX XX</p>
            </div>

            <div>
              <h4 className="text-yellow-500 mb-4">HOURS</h4>
              <p>Mon–Sun: 7AM – 11PM</p>
            </div>
          </div>
        </FadeUp>

        <p className="text-center text-xs text-gray-500 mt-12 pb-6">
          © {new Date().getFullYear()} Flamius. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
