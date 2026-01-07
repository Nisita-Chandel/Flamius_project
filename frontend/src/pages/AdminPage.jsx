import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen bg-black text-white">
  
        {/* ================= HERO HEADER ================= */}
        <section className="text-center px-6 pt-28 pb-20">
          <p className="text-[#b08a2e] tracking-[0.35em] text-xs uppercase mb-4">
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
  
        {/* ================= MAIN SECTION ================= */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
  
            {/* ================= LOGIN CARD ================= */}
            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-8 shadow-2xl">
  
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center">
                  🔒
                </div>
                <div>
                  <h2 className="text-xl font-serif">Administrator Login</h2>
                  <p className="text-sm text-gray-400">
                    Secure access to management system
                  </p>
                </div>
              </div>
  
              {/* Secure Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-black border border-zinc-800 text-[#b08a2e] text-sm">
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
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f0b100]"
                />
              </div>
  
              {/* Button */}
              <button
                    onClick={() => navigate("/admin/verify")}

               className="w-full bg-[#f0b100] text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition">
                ✉ SEND VERIFICATION CODE
              </button>
  
              {/* Security Note */}
              <div className="mt-6 bg-black border border-zinc-800 rounded-xl p-4 text-sm text-gray-400">
                <span className="text-[#b08a2e] font-semibold">Security Notice</span>
                <p className="mt-1">
                  A one-time verification code will be sent to your registered admin
                  email address. Keep your credentials secure.
                </p>
              </div>
            </div>
  
            {/* ================= FEATURES ================= */}
            <div>
              <h2 className="text-3xl font-serif mb-4">
                Admin{" "}
                <span className="text-[#b08a2e]">Features</span>
              </h2>
  
              <p className="text-gray-400 mb-10">
                Access powerful tools and insights to manage your restaurant efficiently.
                Our admin portal provides complete control over all aspects of your business operations.
              </p>
  
              {/* Feature Cards */}
              <div className="space-y-6">
  
                {/* Feature 1 */}
                <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center">
                    🛡
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Enterprise Security</h3>
                    <p className="text-gray-400 text-sm">
                      Military-grade encryption and multi-factor authentication
                      protect your admin access.
                    </p>
                  </div>
                </div>
  
                {/* Feature 2 */}
                <div className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f0b100] to-[#8a6415] flex items-center justify-center">
                    ⚙
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1">Real-time Analytics</h3>
                    <p className="text-gray-400 text-sm">
                      Access comprehensive business insights, sales data,
                      and customer analytics in real-time.
                    </p>
                  </div>
                </div>
  
              </div>
            </div>
  
          </div>
        </section>
      </div>
    );
  };
  
  export default AdminPage;
  