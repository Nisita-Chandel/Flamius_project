import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.6,
    },
  },
};

/* ================= ORDERS DATA ================= */
const orders = [
  {
    id: "#FL8A3A5A",
    status: "PENDING",
    name: "Raj Patil",
    phone: "7786785565",
    item: "Chilies",
    qty: 1,
    price: 0,
    note: "Quickly",
    subtotal: 0,
    tax: 0,
    total: 0,
    date: "20/12/2025",
    time: "02:30 pm",
  },
  {
    id: "#FL090833",
    status: "PENDING",
    name: "Jay Khanna",
    phone: "6646577847",
    item: "Paneer Tikka",
    qty: 6,
    price: 467,
    note: "Quickly",
    subtotal: 2802,
    tax: 504.36,
    total: 3306.36,
    date: "20/12/2025",
    time: "02:21 pm",
  },
  {
    id: "#FLEF59E4",
    status: "PENDING",
    name: "Chawal",
    phone: "9300024153",
    item: "Curd",
    qty: 465,
    price: 65,
    note: "djhfj",
    subtotal: 30225,
    tax: 5440.5,
    total: 35665.5,
    date: "08/12/2025",
    time: "06:18 pm",
  },
  {
    id: "#FL4130EB",
    status: "PENDING",
    name: "Aman Verma",
    phone: "9823456678",
    item: "Butter Naan",
    qty: 10,
    price: 45,
    note: "Extra butter",
    subtotal: 450,
    tax: 81,
    total: 531,
    date: "18/12/2025",
    time: "01:05 pm",
  },
  {
    id: "#FL412BD7",
    status: "PENDING",
    name: "Neha Singh",
    phone: "9876543210",
    item: "Cold Coffee",
    qty: 4,
    price: 180,
    note: "Less sugar",
    subtotal: 720,
    tax: 129.6,
    total: 849.6,
    date: "19/12/2025",
    time: "05:40 pm",
  },
  {
    id: "#FL5677AA",
    status: "PENDING",
    name: "Rohit Mehra",
    phone: "9998877665",
    item: "Veg Biryani",
    qty: 3,
    price: 299,
    note: "Spicy",
    subtotal: 897,
    tax: 161.46,
    total: 1058.46,
    date: "21/12/2025",
    time: "08:10 pm",
  },
];

/* ================= PAGE ================= */
const AdminOrdersPage = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <p className="text-[#b08a2e] tracking-[0.3em] text-xs uppercase mb-4">
          ✦ Culinary Mastery in Numbers
        </p>

        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Order Excellence <br />
          <span className="text-[#b08a2e]">(20 Masterpieces)</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Every order represents a story of culinary passion and exceptional service.
        </p>
      </motion.div>

      {/* ================= STATS (4 ICON CARDS) ================= */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24"
      >
        {[
          { icon: "🏆", label: "Orders", value: "20" },
          { icon: "👥", label: "Customers", value: "09" },
          { icon: "💰", label: "Revenue", value: "₹202,575" },
          { icon: "📈", label: "Growth", value: "+18%" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={card}
            className="bg-[#0c0c0c] border border-zinc-800 rounded-2xl
                       p-6 text-center shadow-xl"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl
                            bg-gradient-to-br from-[#f0b100] to-[#b8892c]
                            flex items-center justify-center text-2xl">
              {stat.icon}
            </div>
            <p className="text-2xl font-semibold">{stat.value}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= ORDERS GRID ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {orders.map((o, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0px 25px 60px rgba(240,177,0,0.18)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0c0c0c] rounded-2xl border border-zinc-800 shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#f0b100] to-[#b8892c]
                            px-6 py-4 flex justify-between items-center">
              <div>
                <p className="text-black font-semibold">{o.id}</p>
                <p className="text-black/80 text-xs">{o.status}</p>
              </div>
              ⏳
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">{o.name}</h3>
                <p className="text-gray-400 text-sm">📞 {o.phone}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{o.item}</span>
                  <span>{o.qty} × ₹{o.price}</span>
                </div>
                <p className="text-xs text-gray-400 italic">Note: {o.note}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{o.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (18% GST)</span>
                  <span>₹{o.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-[#f0b100]">
                  <span>Total</span>
                  <span>₹{o.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-400 pt-4 border-t border-zinc-800">
                <span>📅 {o.date}</span>
                <span>⏰ {o.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FOOTER (unchanged – already perfect) */}
      <footer className="mt-10 border-t border-yellow-500/10 pt-24 px-6">
       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12"> <div> <h3 className="text-[#f0b100] font-serif text-2xl mb-4">🔥 FLAMIUS</h3> <p className="text-gray-400 text-sm"> Experience the art of premium coffee crafted with precision and passion. </p> <div className="flex gap-4 mt-6"> {["f", "in", "x"].map((i) => ( <div key={i} className="w-10 h-10 rounded-full bg-neutral-900 text-[#f0b100] flex items-center justify-center hover:bg-[#f0b100] hover:text-black transition" > {i} </div> ))} </div> </div> <div> <h4 className="text-[#b08a2e] mb-4">QUICK LINKS</h4> <ul className="space-y-2 text-gray-400 text-sm"> <li>Home</li> <li>Menu</li> <li>About</li> <li>Contact</li> <li>Reservations</li> </ul> </div> <div> <h4 className="text-[#b08a2e] mb-4">CONTACT INFO</h4> <ul className="space-y-2 text-gray-400 text-sm"> <li>📍 Main Market, Balaghat, MP</li> <li>📞 +91 XXXX XXXX XX</li> <li>✉️ hello@flamius.com</li> </ul> </div> <div> <h4 className="text-[#b08a2e] mb-4">OPENING HOURS</h4> <p className="text-gray-400 text-sm"> Mon–Fri: <span className="text-[#f0b100]">7AM – 11PM</span><br /> Sat–Sun: <span className="text-[#f0b100]">8AM – 12AM</span><br /> Holidays: <span className="text-[#f0b100]">9AM – 10PM</span> </p> </div> </div> <div className="text-center mt-16 px-6"> <h4 className="text-[#b08a2e] tracking-widest mb-3">STAY UPDATED</h4> <p className="text-gray-400 text-sm mb-6"> Subscribe to get special offers, free giveaways, and exclusive deals </p> <div className="flex justify-center gap-4 max-w-md mx-auto"> <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-yellow-500/20 focus:outline-none" /> <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"> SUBSCRIBE </button> </div> </div> <p className="text-center text-xs text-gray-500 mt-12"> © {new Date().getFullYear()} Flamius. All rights reserved. </p> </footer>
    </div>
  );
};

export default AdminOrdersPage;
