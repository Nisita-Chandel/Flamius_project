import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO HEADER ================= */}
      <FadeUp>
        <section className="text-center px-6 pt-28 pb-20">
          <p className="text-[#b08a2e] tracking-[0.35em] text-xs uppercase mb-4 animate-pulse">
            ⚡ ADMIN PORTAL
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mb-6">
            <span className="text-white">Flamius </span>
            <span className="text-[#b08a2e]">Admin System</span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Exclusive access to Flamius management system.
            Enter your credentials to continue.
          </p>
        </section>
      </FadeUp>

      {/* ================= MAIN SECTION ================= */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* ================= LOGIN CARD ================= */}
          <FadeUp delay={0.1}>
            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 shadow-2xl
                            transition-all duration-500 hover:-translate-y-2
                            hover:shadow-[0_0_40px_rgba(240,177,0,0.15)]">

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 12 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br
                             from-[#f0b100] to-[#8a6415]
                             flex items-center justify-center text-xl"
                >
                  🔒
                </motion.div>
                <div>
                  <h2 className="text-xl font-serif">Administrator Login</h2>
                  <p className="text-sm text-gray-400">
                    Secure access to management system
                  </p>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                              bg-black border border-zinc-800 text-[#b08a2e] text-sm
                              hover:bg-[#111] transition">
                🛡 Secure Admin Access
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-[#b08a2e] text-sm mb-2">
                  ADMIN EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  placeholder="admin@flamius.com"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3
                             focus:outline-none focus:border-[#f0b100]
                             focus:shadow-[0_0_15px_rgba(240,177,0,0.25)]
                             transition-all duration-300"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/admin/verify")}
                className="w-full bg-[#f0b100] text-black py-4 rounded-xl
                           font-semibold flex items-center justify-center gap-3"
              >
                ✉ SEND VERIFICATION CODE
              </motion.button>

              {/* Security Note */}
              <div className="mt-6 bg-black border border-zinc-800 rounded-xl
                              p-4 text-sm text-gray-400
                              hover:border-[#b08a2e] transition">
                <span className="text-[#b08a2e] font-semibold">
                  Security Notice
                </span>
                <p className="mt-1">
                  A one-time verification code will be sent to your registered admin
                  email address. Keep your credentials secure.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* ================= FEATURES ================= */}
          <FadeUp delay={0.2}>
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Admin <span className="text-[#b08a2e]">Features</span>
              </h2>

              <p className="text-gray-400 mb-10">
                Access powerful tools and insights to manage your restaurant efficiently.
                Our admin portal provides complete control over all business operations.
              </p>

              {/* Feature Cards */}
              <div className="space-y-6">

                {/* Feature 1 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl
                             p-6 flex gap-4
                             hover:border-[#b08a2e]
                             hover:shadow-[0_0_30px_rgba(240,177,0,0.15)]
                             transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br
                                  from-[#f0b100] to-[#8a6415]
                                  flex items-center justify-center text-xl">
                    🛡
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Military-grade encryption and multi-factor authentication
                      protect your admin access.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl
                             p-6 flex gap-4
                             hover:border-[#b08a2e]
                             hover:shadow-[0_0_30px_rgba(240,177,0,0.15)]
                             transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br
                                  from-[#f0b100] to-[#8a6415]
                                  flex items-center justify-center text-xl">
                    ⚙
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">
                      Real-time Analytics
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Access comprehensive business insights, sales data,
                      and customer analytics in real-time.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>
          </FadeUp>

        </div>
      </section>
    </div>
  );
};

export default AdminPage;
