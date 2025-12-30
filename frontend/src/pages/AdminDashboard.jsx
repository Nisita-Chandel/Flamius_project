import { useEffect, useState } from "react";
import API from "../api/api";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Product fetch error", error);
    }
  };

  /* ---------------- FETCH ORDERS (ADMIN) ---------------- */
  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders");
      setOrders(data);
    } catch (error) {
      console.error("Order fetch error", error);
    }
  };

  /* ---------------- ADD PRODUCT ---------------- */
  const addProduct = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;

    try {
      await API.post("/products", {
        name,
        price,
        image,
        description,
      });

      alert("Product added successfully");
      e.target.reset();
      fetchProducts();
    } catch (error) {
      alert("Only admin can add products");
    }
  };

  /* ---------------- LOGOUT ---------------- */
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🍽️ Admin Dashboard</h2>

      <button onClick={logoutHandler}>Logout</button>

      <hr />

      {/* ================= ADD PRODUCT ================= */}
      <h3>Add New Dish</h3>
      <form onSubmit={addProduct}>
        <input name="name" placeholder="Dish Name" required />
        <input name="price" placeholder="Price" type="number" required />
        <input name="image" placeholder="Image URL" required />
        <input name="description" placeholder="Description" required />
        <button>Add Product</button>
      </form>

      <hr />

      {/* ================= PRODUCT LIST ================= */}
      <h3>All Products</h3>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <img src={p.image} width="100" />
          </div>
        ))
      )}

      <hr />

      {/* ================= ORDER LIST ================= */}
      <h3>All Orders</h3>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((o) => (
          <div key={o._id} style={{ border: "1px solid green", margin: "10px" }}>
            <p><strong>User:</strong> {o.user?.email}</p>
            <p><strong>Total:</strong> ₹{o.total}</p>
            <p><strong>Status:</strong> {o.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;
