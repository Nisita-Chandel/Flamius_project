const ExperiencePage = () => {
    return (
      <div className="bg-black text-white">
  
        {/* ================= HERO SECTION ================= */}
        <section className="px-6 py-24 text-center bg-gradient-to-b from-[#1a1405] to-black">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center shadow-xl">
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
            Every moment at Flamius is crafted to create memories that linger long after the last bite.
          </p>
        </section>
  
        {/* ================= STATS SECTION (2nd IMAGE) ================= */}
        <section className="px-6 py-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
            {[
              { value: "5000+", label: "HAPPY CUSTOMERS", icon: "👥" },
              { value: "50+", label: "AWARDS WON", icon: "🏅" },
              { value: "12+", label: "EXPERT CHEFS", icon: "👨‍🍳" },
              { value: "4.9", label: "STAR RATING", icon: "⭐" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[#f0b100] text-3xl mb-3">{stat.icon}</div>
                <h3 className="text-4xl font-serif text-[#f0b100] mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs tracking-widest text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* ================= PILLARS SECTION ================= */}
        <section className="px-6 py-24 text-center">
          <h2 className="text-4xl font-serif mb-4">
            The Pillars of{" "}
            <span className="text-[#b08a2e]">Our Excellence</span>
          </h2>
  
          <p className="text-gray-400 max-w-xl mx-auto mb-16">
            Discover what sets Flamius apart and makes every visit an extraordinary journey
          </p>
  
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
              <div
                key={i}
                className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 text-left hover:border-[#b08a2e] transition"
              >
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
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
              <div
                key={i}
                className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 hover:border-[#b08a2e]"
              >
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
  
                <button className="w-full bg-[#f0b100] text-black py-3 rounded-xl font-semibold">
                  BOOK THIS EXPERIENCE
                </button>
              </div>
            ))}
          </div>
        </section>
  
        {/* ================= FOOTER (LAST IMAGE) ================= */}
        <footer className="px-6 py-20 border-t border-zinc-800">
          <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
  
            {/* BRAND */}
            <div>
              <h3 className="text-[#f0b100] font-serif text-xl mb-4">FLAMIUS</h3>
              <p className="text-gray-400 text-sm">
                Experience the art of premium coffee crafted with precision and passion.
                From single-origin brews to signature blends.
              </p>
            </div>
  
            {/* QUICK LINKS */}
            <div>
              <h4 className="text-[#b08a2e] mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* CONTACT */}
            <div>
              <h4 className="text-[#b08a2e] mb-4">CONTACT INFO</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Main Market, Balaghat, MP</li>
                <li>+91 XXXXX XXXXX</li>
                <li>hello@flamius.com</li>
              </ul>
            </div>
  
            {/* HOURS */}
            <div>
              <h4 className="text-[#b08a2e] mb-4">OPENING HOURS</h4>
              <p className="text-gray-400 text-sm">
                Mon–Fri: 7:00 AM – 11:00 PM <br />
                Sat–Sun: 8:00 AM – 12:00 AM
              </p>
            </div>
          </div>
        </footer>
  
      </div>
    );
  };
  
  export default ExperiencePage;
  