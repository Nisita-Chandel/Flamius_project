import { useState } from "react";

const OrderPage = () => {
  const [items, setItems] = useState([
    { category: "Dishes", name: "", qty: 1, price: 0, note: "" },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { category: "Dishes", name: "", qty: 1, price: 0, note: "" },
    ]);
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-gold text-center mb-10">
        Flamius Order
      </h1>

      {/* CUSTOMER DETAILS */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <input
          type="text"
          placeholder="Customer Name"
          className="input"
          defaultValue="Raj Patil"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="input"
          defaultValue="7786785565"
        />
      </div>

      {/* ORDER ITEMS */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>

        {items.map((item, index) => (
          <div key={index} className="grid md:grid-cols-5 gap-3 mb-3">
            <select className="input">
              <option>Dishes</option>
              <option>Drinks</option>
              <option>Desserts</option>
            </select>

            <input className="input" placeholder="Item Name" />
            <input className="input" type="number" defaultValue={1} />
            <input className="input" type="number" placeholder="₹ Price" />
            <input className="input" placeholder="Special Notes" />
          </div>
        ))}

        <button
          onClick={addItem}
          className="mt-4 text-gold hover:underline"
        >
          + Add Another Item
        </button>
      </div>

      {/* PAYMENT & NOTES */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <select className="input">
          <option>Card</option>
          <option>Cash</option>
          <option>UPI</option>
        </select>

        <textarea
          className="input h-24"
          placeholder="Special Instructions"
        ></textarea>
      </div>

      {/* ORDER SUMMARY */}
      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (18% GST)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gold">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* PLACE ORDER */}
      <button className="w-full bg-gold text-black py-4 rounded-xl text-lg font-semibold hover:opacity-90">
        PLACE ORDER AT FLAMIUS →
      </button>
    </div>
  );
};

export default OrderPage;
