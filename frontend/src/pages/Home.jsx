import { useEffect, useState } from "react";
import API from "../api/api";
import { motion } from "framer-motion";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => setFoods(res.data));
  }, []);

  const addToCart = (food) => {
    setCart((prev) => [...prev, food]);
  };

  const placeOrder = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    await API.post("/orders", { items: cart, total });
    alert("Order placed successfully 🍕");
    setCart([]);
  };

  return (
    <div>
      {/* HERO SECTION (NO GAP WITH NAVBAR) */}
      <section
        className="h-[70vh] pt-[72px] flex items-center justify-center 
                   text-white text-center px-6 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_1280.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 p-6 rounded-xl max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delicious Food, Delivered Fast 
          </h1>
          <p className="text-lg mb-6">
            Order your favourite meals from Flamius
          </p>
          <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition">
            Explore Menu
          </button>
        </motion.div>
      </section>

      {/* MENU SECTION */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🍽️ Our Menu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {foods.map((food) => (
            <motion.div
              key={food._id}
              whileHover={{ scale: 1.05 }}
              className="border rounded-xl p-4 shadow hover:shadow-xl transition bg-white"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold">{food.name}</h4>
              <p className="text-red-500 font-bold mb-3">
                ₹{food.price}
              </p>
              <button
                onClick={() => addToCart(food)}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CART POPUP */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-white shadow-xl rounded-xl p-5 w-64 z-50">
          <h3 className="font-bold mb-2">🛒 Cart ({cart.length})</h3>
          <div className="text-sm mb-3 max-h-40 overflow-y-auto">
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} - ₹{item.price}
              </p>
            ))}
          </div>
          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
