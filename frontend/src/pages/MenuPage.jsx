import { useState } from "react";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";

/* ===== FADE-UP REUSABLE ANIMATION ===== */
const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

/* ===== IMAGE URLS ===== */
const images = [
  "https://i.pinimg.com/1200x/35/55/05/3555054390e86008f8c1a32ef81f8ae8.jpg",
  "https://i.pinimg.com/736x/fa/b3/eb/fab3ebf9ca504f576f6ed9e9bb2ac504.jpg",
  "https://i.pinimg.com/736x/f4/84/bd/f484bdda40b5d9a181ef35c88b490669.jpg",
  "https://i.pinimg.com/736x/ef/9c/98/ef9c983fb0be694d227d4b14fb64fb91.jpg",
  "https://i.pinimg.com/736x/f2/6d/be/f26dbe6df69f12169b283da9a86c190e.jpg",
];

/* ===== DISH DATA ===== */
const dishes = [
  { id: 1, name: "dbhbh", desc: "Signature premium creation", price: 1, image: images[0], premium: true },
  { id: 2, name: "ddjsjd", desc: "Hand-crafted seasonal dish", price: 64, image: images[1], premium: true },
  { id: 3, name: "hkjckc", desc: "Exclusive roasted blend", price: 344, image: images[2], premium: true },
  { id: 4, name: "jhbjhjbhs", desc: "Luxury industrial theme dish", price: 88383, image: images[3], premium: true },
  { id: 5, name: "JJDJKJK", desc: "Everyday premium carry", price: 38838, image: images[4], premium: true },
  { id: 6, name: "Latte Art", desc: "Barista crafted latte", price: 209, image: images[0], premium: true },
  { id: 7, name: "Cold Brew", desc: "Slow steeped perfection", price: 189, image: images[1], premium: true },
  { id: 8, name: "Premium Roast", desc: "Dark roast beans selection", price: 309, image: images[2], premium: true },
  { id: 9, name: "Chef Special", desc: "Limited seasonal menu", price: 999, image: images[3], premium: true },
];

const MenuPage = () => {
  const [search, setSearch] = useState("");

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase()) ||
      dish.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-black text-white pt-28 px-8 overflow-hidden"
    >
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

      {/* ================= DISH GRID ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
        {filteredDishes.map((dish, i) => (
          <FadeUp key={dish.id} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden
              border border-yellow-500/10"
            >
              {/* IMAGE */}
              <div className="relative h-68 overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {dish.premium && (
                  <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                    ★ PREMIUM
                  </span>
                )}

                <span className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-yellow-500 text-sm">
                  ₹{dish.price}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-serif text-lg">{dish.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{dish.desc}</p>

                <div className="flex justify-between items-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-yellow-500 text-sm tracking-widest hover:underline"
                  >
                    REFINE DISH
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title="Delete Dish"
                    className="text-red-100 hover:text-red-400 transition"
                  >
                    <MdDelete size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuPage;
