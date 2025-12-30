import { useEffect, useState } from "react";
import API from "../api/api";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  /* ---------------- PLACE ORDER ---------------- */
  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    try {
      await API.post("/orders", {
        items: cart,
        total,
      });

      alert("Order placed successfully 🍽️");
      setCart([]);
    } catch (error) {
      alert("Please login to place order");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍕 Flamius Restaurant</h2>

      {/* ================= MENU ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {products.map((p) => (
          <motion.div
            key={p._id}
            whileHover={{ scale: 1.05 }}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "200px",
            }}
          >
            <img src={p.image} alt={p.name} width="180" height="120" />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </motion.div>
        ))}
      </motion.div>

      <hr />

      {/* ================= CART ================= */}
      <h3>🛒 Cart</h3>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ₹{item.price}
            </p>
          ))}

          <p>
            <strong>Total:</strong> ₹
            {cart.reduce((sum, item) => sum + item.price, 0)}
          </p>

          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Home;
