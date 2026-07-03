import React from "react";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

const Cart = ({ cartItems, setCartItems }) => {
  // Increase quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Amount
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <ShoppingCart size={80} className="text-gray-400" />
        <h2 className="text-2xl font-semibold mt-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Add some delicious food to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border rounded-xl p-4 shadow-sm"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />

              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">
                  ₹{item.price} × {item.quantity}
                </p>

                <p className="font-bold mt-1">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                <Minus size={18} />
              </button>

              <span className="text-lg font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
              >
                <Plus size={18} />
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="ml-5 text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Total : ₹{totalPrice}
        </h2>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;