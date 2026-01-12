import { useState } from "react";
import { motion } from "framer-motion";

/* ===== FADE-UP REUSABLE ANIMATION ===== */
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

const dishes = [
  {
    id: 1,
    name: "dbhbh",
    desc: "Signature premium creation",
    price: 1,
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
    premium: true,
  },
  {
    id: 2,
    name: "ddjsjd",
    desc: "Hand-crafted seasonal dish",
    price: 64,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    premium: true,
  },
  {
    id: 3,
    name: "hkjckc",
    desc: "Exclusive roasted blend",
    price: 344,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    premium: true,
  },
  {
    id: 4,
    name: "jhbjhjbhs",
    desc: "Luxury industrial theme dish",
    price: 88383,
    image: "https://images.unsplash.com/photo-1541976076758-347942db197c",
    premium: true,
  },
  {
    id: 5,
    name: "JJDJKJK",
    desc: "Everyday premium carry",
    price: 38838,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    premium: true,
  },
  {
    id: 6,
    name: "Latte Art",
    desc: "Barista crafted latte",
    price: 209,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    premium: true,
  },
  {
    id: 7,
    name: "Cold Brew",
    desc: "Slow steeped perfection",
    price: 189,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
    premium: true,
  },
  {
    id: 8,
    name: "Premium Roast",
    desc: "Dark roast beans selection",
    price: 309,
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
    premium: true,
  },
  {
    id: 9,
    name: "Chef Special",
    desc: "Limited seasonal menu",
    price: 999,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    premium: true,
  },
];

const MenuPage = () => {
  const [search, setSearch] = useState("");

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-8 overflow-hidden">

      {/* ================= HERO ================= */}
      <FadeUp>
        <div className="text-center mb-20">
          <p className="text-yellow-500 tracking-widest text-xs mb-3">
            ✦ CULINARY MANAGEMENT
          </p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Master Your <span className="text-yellow-500">Menu Collection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Curate exceptional dining experiences with our premium menu
            management system.
          </p>
        </div>
      </FadeUp>

      {/* ================= HEADER ================= */}
      <FadeUp delay={0.1}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-2xl font-serif">Your Culinary Portfolio</h2>
            <p className="text-yellow-500 text-sm mt-1">
              {filteredDishes.length} of {dishes.length} Dishes
            </p>
          </div>

          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600
            text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            + CREATE NEW MASTERPIECE
          </button>
        </div>
      </FadeUp>

      {/* ================= SEARCH ================= */}
      <FadeUp delay={0.15}>
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          <input
            type="text"
            placeholder="Search dishes, descriptions..."
            className="bg-neutral-900 border border-yellow-500/20
              rounded-xl px-5 py-3 text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="bg-neutral-900 border border-yellow-500/20 rounded-xl px-4 py-3">
            <option>All Categories</option>
          </select>
          <select className="bg-neutral-900 border border-yellow-500/20 rounded-xl px-4 py-3">
            <option>Sort by Name</option>
          </select>
        </div>
      </FadeUp>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
        {[
          ["SHOWING", filteredDishes.length],
          ["TOTAL DISHES", dishes.length],
          ["STARTING PRICE", "₹0.98"],
          ["PREMIUM PRICE", "₹88383"],
          ["CATEGORIES", 0],
        ].map(([label, value], i) => (
          <FadeUp key={label} delay={i * 0.08}>
            <div className="bg-neutral-900 rounded-xl py-6 text-center
              border border-yellow-500/10 hover:-translate-y-1 transition">
              <p className="text-yellow-500 text-2xl font-bold">{value}</p>
              <p className="text-xs text-gray-400 mt-1">{label}</p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* ================= DISH GRID ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
        {filteredDishes.map((dish, i) => (
          <FadeUp key={dish.id} delay={i * 0.05}>
            <div className="bg-neutral-900 rounded-2xl overflow-hidden
              border border-yellow-500/10 hover:scale-[1.03] transition-all duration-300">
              
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-52 w-full object-cover"
                />
                {dish.premium && (
                  <span className="absolute top-4 left-4 bg-yellow-500
                    text-black text-xs px-3 py-1 rounded-full font-semibold">
                    ★ PREMIUM
                  </span>
                )}
                <span className="absolute top-4 right-4 bg-black/80
                  px-3 py-1 rounded-full text-yellow-500 text-sm">
                  ₹{dish.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg">{dish.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{dish.desc}</p>

                <div className="flex justify-between items-center mt-6">
                  <button className="text-yellow-500 text-sm tracking-widest hover:underline">
                    REFINE DISH
                  </button>
                  <button className="text-red-500 hover:text-red-400 transition">
                    🗑
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
