const orders = [
    {
      id: "#FL8A3A5A",
      status: "PENDING",
      name: "Raj Patil",
      phone: "7499243935",
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
  ];
  
  const AdminOrdersPage = () => {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-16">
  
        {/* ===== PAGE TITLE ===== */}
        <div className="text-center mb-16">
          <p className="text-[#b08a2e] tracking-[0.3em] text-xs uppercase mb-3">
            ✦ Culinary Mastery in Numbers
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Order Excellence{" "}
            <span className="text-[#b08a2e]">(20 Masterpieces)</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every order represents a story of culinary passion and exceptional service.
          </p>
        </div>
  
        {/* ===== ORDERS GRID ===== */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
  
          {orders.map((order, i) => (
            <div
              key={i}
              className="bg-[#0c0c0c] rounded-2xl border border-zinc-800 overflow-hidden shadow-xl"
            >
  
              {/* TOP BAR */}
              <div className="bg-gradient-to-r from-[#f0b100] to-[#b8892c] px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="text-black font-semibold">{order.id}</p>
                  <p className="text-black/80 text-xs">{order.status}</p>
                </div>
                ⏳
              </div>
  
              {/* BODY */}
              <div className="p-6 space-y-6">
  
                {/* CUSTOMER */}
                <div>
                  <h3 className="text-lg font-semibold">{order.name}</h3>
                  <p className="text-gray-400 text-sm">📞 {order.phone}</p>
                </div>
  
                {/* ORDER DETAILS */}
                <div>
                  <p className="text-[#b08a2e] font-semibold mb-2">
                    🍽 ORDER DETAILS
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>{order.item}</span>
                    <span>
                      {order.qty} × ₹{order.price}
                    </span>
                  </div>
                  <p className="text-[#b08a2e] text-sm mt-1">
                    ₹ {order.subtotal}
                  </p>
                  <p className="text-xs text-gray-400 italic">
                    Note: {order.note}
                  </p>
                </div>
  
                {/* SPECIAL INSTRUCTIONS */}
                <div className="bg-black border border-zinc-800 rounded-xl p-4">
                  <p className="text-[#b08a2e] font-semibold mb-1">
                    📄 SPECIAL INSTRUCTIONS
                  </p>
                  <p className="text-gray-300 text-sm">
                    "{order.note}"
                  </p>
                </div>
  
                {/* PRICE */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Tax (18% GST)</span>
                    <span>₹{order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-[#f0b100]">
                    <span>Total Amount</span>
                    <span>₹{order.total.toFixed(2)}</span>
                  </div>
                </div>
  
                {/* DATE */}
                <div className="flex justify-between text-xs text-gray-400 pt-4 border-t border-zinc-800">
                  <span>📅 {order.date}</span>
                  <span>⏰ {order.time}</span>
                </div>
  
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AdminOrdersPage;
  