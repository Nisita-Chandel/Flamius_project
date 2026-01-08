const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= SUCCESS TOAST ================= */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-[#0f7a4a] px-6 py-3 rounded-full shadow-lg border border-green-400/30">
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-sm font-bold">
            ✓
          </span>
          <span className="text-sm font-medium text-white">
            Welcome back, Admin!
          </span>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="px-6 pt-32 pb-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center shadow-xl">
            <span className="text-black text-3xl">👑</span>
          </div>
        </div>

        <p className="text-[#b08a2e] tracking-[0.3em] text-xs mb-4 uppercase">
          ✦ Culinary Mastery in Numbers
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          <span className="text-white">Order Excellence</span>{" "}
          <span className="text-[#b08a2e]">(20 Masterpieces)</span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
          Every order represents a story of culinary passion and exceptional
          service. Track the journey of gastronomic excellence from kitchen to table.
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {/* CARD */}
          {[
            {
              icon: "🎖",
              label: "Total Orders",
              value: "20",
              color: "from-[#f0b100] to-[#8a6415]",
            },
            {
              icon: "👥",
              label: "Active Customers",
              value: "0",
              color: "from-[#10b981] to-[#047857]",
            },
            {
              icon: "💰",
              label: "Total Revenue",
              value: "₹202,575",
              color: "from-[#38bdf8] to-[#0369a1]",
            },
            {
              icon: "📈",
              label: "Monthly Growth",
              value: "₹10,129",
              color: "from-[#c084fc] to-[#6b21a8]",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 text-center hover:border-[#b08a2e] transition"
            >
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl`}
              >
                {card.icon}
              </div>

              <p className="text-gray-400 text-sm mb-2">{card.label}</p>
              <h3 className="text-3xl font-semibold text-white">
                {card.value}
              </h3>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default AdminDashboard;
