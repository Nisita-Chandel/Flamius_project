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
    <div className="min-h-screen bg-black text-white relative">

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-3 bg-green-700 px-6 py-3 rounded-full shadow-lg">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 text-sm font-bold">
              ✓
            </span>
            <span className="text-sm font-medium">
              Order Placed Successfully!
            </span>
          </div>
        </div>
      )}

      {/* 🔥 HERO SECTION (EXACT IMAGE STYLE) */}
     {/* 🔥 HERO SECTION — EXACT IMAGE MATCH */}
{/* 🔥 HERO SECTION — REDUCED SPACING */}
<section className="flex flex-col items-center justify-center text-center bg-black px-4 py-16">

  {/* Crown Icon */}
  <div className="w-[72px] h-[72px] rounded-2xl 
                  bg-[#F0B100]
                  flex items-center justify-center shadow-2xl mb-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth="2"
      className="w-9 h-9"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 16l-1-9 4 3 4-6 4 6 4-3-1 9H5z"
      />
    </svg>
  </div>

  {/* CREATE YOUR ORDER */}
  <p className="text-[#b08a2e] tracking-[0.35em] text-xs mb-3 uppercase">
    ✨ CREATE YOUR ORDER
  </p>

  {/* MAIN HEADING */}
  <h1 className="text-[40px] md:text-[56px] leading-tight font-serif mb-3">
    <span className="text-white font-medium">Place Your </span>
    <span className="text-[#b08a2e] font-semibold">Flamius Order</span>
  </h1>

  {/* SUBTITLE */}
  <p className="text-[#b5b5b5] max-w-xl text-sm md:text-base">
    Experience culinary excellence with our premium ordering system
  </p>

</section>


      {/* 🔥 ORDER FORM */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto bg-[#0c0c0c] rounded-2xl p-10 border border-zinc-800 shadow-2xl">

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
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              Order Items{" "}
              <span className="text-[#c9a24d] text-sm">
                ({items.length})
              </span>
            </h2>

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
              className="w-full mt-6 border border-dashed border-[#c9a24d]/40 rounded-xl py-4 text-[#c9a24d]"
            >
              + Add Another Item
            </button>
          </div>

          {/* PAYMENT & INSTRUCTIONS */}
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

          {/* ORDER SUMMARY */}
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

          {/* PLACE ORDER */}
          <button
  onClick={handlePlaceOrder}
  className="w-full bg-[#F0B100] text-black py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
>
  PLACE ORDER AT FLAMIUS →
</button>

        </div>
      </section>
    </div>
  );
};

export default OrderPage;
