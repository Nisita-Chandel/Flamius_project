import { useState } from "react";

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
    <div className="min-h-screen bg-black text-white px-4 py-10 relative">

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-[#0f7a4a] text-white px-6 py-2.5 rounded-full shadow-lg border border-green-400/30">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-sm font-bold">
              ✓
            </span>
            <span className="text-sm font-medium">
              Order Placed Successfully!
            </span>
          </div>
        </div>
      )}

      <p className="text-center text-gray-400 mb-2">
        Experience culinary excellence with our premium ordering system
      </p>

      <div className="max-w-6xl mx-auto bg-[#0c0c0c] rounded-2xl p-8 border border-zinc-800 shadow-lg">

        {/* CUSTOMER DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div>
            <label className="text-[#f5c77a] text-sm mb-2 flex gap-2">
              👤 CUSTOMER NAME *
            </label>
            <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3" />
          </div>

          <div>
            <label className="text-[#f5c77a] text-sm mb-2 flex gap-2">
              📞 CONTACT NUMBER
            </label>
            <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3" />
          </div>
        </div>

        {/* ORDER ITEMS */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#f5c77a]">🍽</span>
            <h2 className="text-xl font-semibold">Order Items</h2>
            <span className="text-[#f5c77a] text-sm">
              {items.length} Item
            </span>
          </div>

          {items.map((_, i) => (
            <div key={i} className="grid md:grid-cols-5 gap-3 mb-4">
              <select className="bg-black border border-zinc-800 rounded-xl px-3 py-2">
                <option>Dishes</option>
                <option>Drinks</option>
              </select>
              <input className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />
              <input type="number" defaultValue={1} className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />
              <input type="number" placeholder="0" className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />
              <input className="bg-black border border-zinc-800 rounded-xl px-3 py-2" />
            </div>
          ))}

          <button
            onClick={addItem}
            className="w-full mt-6 border border-dashed border-[#f5c77a]/40 rounded-xl py-4 text-[#f5c77a]"
          >
            + Add Another Item
          </button>
        </div>

        {/* 🔥 PAYMENT METHOD + SPECIAL INSTRUCTIONS (COPIED UI) */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* PAYMENT METHOD */}
          <div className="bg-black border border-zinc-800 rounded-xl p-6">
            <h3 className="flex items-center gap-2 text-[#f5c77a] font-semibold mb-4">
              💳 PAYMENT METHOD
            </h3>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-[#0c0c0c] border border-zinc-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-[#f5c77a]"
            >
              <option className="bg-black">Card</option>
              <option className="bg-black">Cash</option>
              <option className="bg-black">UPI</option>
            </select>
          </div>

          {/* SPECIAL INSTRUCTIONS */}
          <div className="bg-black border border-zinc-800 rounded-xl p-6">
            <h3 className="flex items-center gap-2 text-[#f5c77a] font-semibold mb-4">
              📝 SPECIAL INSTRUCTIONS
            </h3>
            <div className="bg-[#0c0c0c] border border-zinc-800 rounded-lg px-4 py-3 text-gray-300 h-20">
              Quickly
            </div>
          </div>

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-black border border-zinc-800 rounded-xl p-6 mb-12">
          <h3 className="flex items-center gap-2 text-[#f5c77a] font-semibold mb-6">
            📄 Order Summary
          </h3>

          <div className="flex justify-between py-2 text-gray-300">
            <span>Subtotal (1 items)</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 text-gray-300">
            <span>Tax (18% GST)</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pt-4 text-lg font-semibold text-[#f5c77a]">
            <span>Total Amount</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-[#f5c77a] text-black py-4 rounded-xl text-lg font-semibold hover:opacity-90"
        >
          PLACE ORDER AT FLAMIUS →
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
