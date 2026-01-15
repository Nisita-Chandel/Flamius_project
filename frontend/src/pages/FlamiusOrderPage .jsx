import React, { useState } from "react";
import axios from "axios";

const FlamiusOrderPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const userToken = localStorage.getItem("token"); // your auth token

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          customerName,
          contactNumber,
          items,
          total,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      console.log("Order saved:", response.data);
      alert("Order placed successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  return (
    <div>
      {/* Inputs & Items UI */}
      <button onClick={placeOrder} className="btn-primary">
        Place Order
      </button>
    </div>
  );
};

export default FlamiusOrderPage;
