import { motion } from "framer-motion";
import { Link } from "react-router-dom";


/* ===== REUSABLE FADE-UP ANIMATION ===== */
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

const ExperiencePage = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <FadeUp>
        <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1a1405] to-black">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0b100] to-[#8a6415]
                            flex items-center justify-center shadow-xl">
              <span className="text-black text-3xl">👑</span>
            </div>
          </div>

          <p className="text-[#b08a2e] tracking-[0.3em] text-xs mb-4 uppercase">
            ✦ THE FLAMIUS DIFFERENCE
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            <span className="text-white">Beyond Dining</span>{" "}
            <span className="text-[#b08a2e]">An Experience</span>
          </h1>

          <p className="text-[#b5b5b5] max-w-3xl mx-auto text-base md:text-lg">
            Step into a world where culinary artistry meets unparalleled hospitality.
            Every moment at Flamius is crafted to create memories that linger.
          </p>
        </section>
      </FadeUp>

      {/* ================= STATS ================= */}
      <section className="px-6 py-20 border-t border-zinc-800">
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {[
            { value: "5000+", label: "HAPPY CUSTOMERS", icon: "👥" },
            { value: "50+", label: "AWARDS WON", icon: "🏅" },
            { value: "12+", label: "EXPERT CHEFS", icon: "👨‍🍳" },
            { value: "4.9", label: "STAR RATING", icon: "⭐" },
          ].map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div>
                <div className="text-[#f0b100] text-3xl mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-serif text-[#f0b100] mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs tracking-widest text-gray-400">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="px-6 py-24 text-center">
        <FadeUp>
          <h2 className="text-4xl font-serif mb-4">
            The Pillars of{" "}
            <span className="text-[#b08a2e]">Our Excellence</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-16">
            Discover what sets Flamius apart and makes every visit extraordinary
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Master Culinary Artistry",
              desc: "15+ Award Winning Chefs crafting perfection.",
            },
            {
              title: "Luxury Ambience",
              desc: "Elegant spaces designed for unforgettable moments.",
            },
            {
              title: "Personalized Service",
              desc: "Hospitality tailored uniquely to you.",
            },
          ].map((item, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8
                              text-left hover:border-[#b08a2e] transition">
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE CARDS ================= */}
      <section className="px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Romantic Evening",
              price: "₹2,500",
              features: [
                "Private table setting",
                "Custom menu curation",
                "Sommelier wine pairing",
                "Complimentary dessert",
              ],
            },
            {
              title: "Business Dining",
              price: "₹3,000",
              features: [
                "Private dining room",
                "Executive menu options",
                "High-speed WiFi",
                "Discreet billing",
              ],
            },
            {
              title: "Family Celebration",
              price: "₹4,000",
              features: [
                "Family-style servings",
                "Kid-friendly options",
                "Celebration cake",
                "Photography service",
              ],
            },
          ].map((card, i) => (
            <FadeUp key={i} delay={i * 0.12}>
              <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8
                              hover:border-[#b08a2e] transition">
                <h3 className="text-2xl font-serif mb-3">{card.title}</h3>
                <p className="text-[#b08a2e] mb-6">
                  Starting from {card.price}
                </p>

                <ul className="space-y-3 text-sm text-gray-300 mb-8">
                  {card.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#b08a2e]">●</span> {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full bg-[#f0b100] text-black py-3 rounded-xl font-semibold"
                >
                  BOOK THIS EXPERIENCE
                </motion.button>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
     
    </div>
  );
};

export default ExperiencePage;
