import { useState } from "react";
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

const OrderPage = () => {
  const [items, setItems] = useState([
    { category: "Dishes", name: "", qty: 1, price: 0, note: "" },
  ]);

  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Card");

  const addItem = () => {
    setItems([
      ...items,
      { category: "Dishes", name: "", qty: 1, price: 0, note: "" },
    ]);
  };

  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* ================= SUCCESS MESSAGE ================= */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed left-1/2 -translate-x-1/2 top-6 z-50"
        >
          <div className="flex items-center gap-3 bg-green-700 px-6 py-3 rounded-full shadow-lg">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-sm font-bold">
              ✓
            </span>
            <span className="text-sm font-medium">
              Order Placed Successfully!
            </span>
          </div>
        </motion.div>
      )}

      {/* ================= HERO ================= */}
      <FadeUp>
        <section className="flex flex-col items-center text-center px-4 py-16">
          <div className="w-[70px] h-[70px] rounded-2xl bg-[#F0B100]
                          flex items-center justify-center shadow-2xl mb-4">
            👑
          </div>

          <p className="text-[#b08a2e] tracking-[0.35em] text-xs mb-3 uppercase">
            ✨ CREATE YOUR ORDER
          </p>

          <h1 className="text-[40px] md:text-[56px] font-serif mb-3">
            <span className="text-white">Place Your </span>
            <span className="text-[#b08a2e]">Flamius Order</span>
          </h1>

          <p className="text-[#b5b5b5] max-w-xl text-sm md:text-base">
            Experience culinary excellence with our premium ordering system
          </p>
        </section>
      </FadeUp>

      {/* ================= ORDER FORM ================= */}
      <section className="px-4 pb-24">
        <FadeUp delay={0.1}>
          <div className="max-w-6xl mx-auto bg-[#0c0c0c] rounded-2xl p-10
                          border border-zinc-800 shadow-2xl">

            {/* CUSTOMER DETAILS */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div>
                <label className="text-[#c9a24d] text-sm mb-2 block">
                  CUSTOMER NAME *
                </label>
                <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3" />
              </div>

              <div>
                <label className="text-[#c9a24d] text-sm mb-2 block">
                  CONTACT NUMBER
                </label>
                <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3" />
              </div>
            </div>

            {/* ORDER ITEMS */}
            <FadeUp delay={0.2}>
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-4">
                  Order Items{" "}
                  <span className="text-[#c9a24d] text-sm">({items.length})</span>
                </h2>

                {/* HEADINGS */}
                <div className="grid md:grid-cols-5 gap-3 mb-4 text-sm font-semibold text-[#c9a24d]">
                  <span>CATEGORY</span>
                  <span>ITEM NAME</span>
                  <span>QUANTITY</span>
                  <span>PRICE (₹)</span>
                  <span>SPECIAL NOTES</span>
                </div>

                {/* ITEM FIELDS */}
                {items.map((_, i) => (
                  <div key={i} className="grid md:grid-cols-5 gap-3 mb-4">
                    <select className="bg-black border border-zinc-800 rounded-xl px-3 py-2">
                      <option>Dishes</option>
                      <option>Coffee</option>
                      <option>Appetizers</option>
                      <option>Main Course</option>
                      <option>Desserts</option>
                      <option>Beverages</option>
                      <option>Specials</option>
                    </select>

                    <input placeholder="Enter item name" className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />

                    <input type="number" defaultValue={1} className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />

                    <input type="number" placeholder="0" className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />

                    <input placeholder="Special notes" className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />
                  </div>
                ))}

                {/* ADD ITEM BUTTON */}
                <button
                  onClick={addItem}
                  className="w-full mt-6 border border-dashed border-[#c9a24d]/40
                             rounded-xl py-4 text-[#c9a24d] hover:bg-[#c9a24d]/10 transition"
                >
                  + Add Another Item
                </button>
              </div>
            </FadeUp>

            {/* PAYMENT + NOTES */}
            <FadeUp delay={0.3}>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-black border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-[#c9a24d] font-semibold mb-4">
                    PAYMENT METHOD
                  </h3>

                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full bg-[#0c0c0c] border border-zinc-800 rounded-lg px-4 py-3"
                  >
                    <option>Card</option>
                    <option>Cash</option>
                    <option>UPI</option>
                  </select>
                </div>

                <div className="bg-black border border-zinc-800 rounded-xl p-6">
                  <h3 className="text-[#c9a24d] font-semibold mb-4">
                    SPECIAL INSTRUCTIONS
                  </h3>

                  <textarea className="w-full bg-[#0c0c0c] border border-zinc-800 rounded-lg px-4 py-3 h-20" />
                </div>
              </div>
            </FadeUp>

            {/* ORDER SUMMARY */}
            <FadeUp delay={0.4}>
              <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-12">
                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-300 mb-2">
                  <span>Tax (18% GST)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xl font-semibold text-[#c9a24d]">
                  <span>Total Amount</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </FadeUp>

            {/* PLACE ORDER */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={handlePlaceOrder}
              className="w-full bg-[#F0B100] text-black py-4 rounded-xl
                         text-lg font-semibold transition"
            >
              PLACE ORDER AT FLAMIUS →
            </motion.button>

          </div>
        </FadeUp>
      </section>

    </div>
  );
};

export default OrderPage;
