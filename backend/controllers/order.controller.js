// controllers/orderController.js
import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, total, customerName, contactNumber } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No order items provided" });
    }

    const order = await Order.create({
      user: req.user._id, // user comes from auth middleware
      customerName,
      contactNumber,
      items,
      total,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
