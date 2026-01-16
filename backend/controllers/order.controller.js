import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { customerName, contactNumber, items, subtotal, tax, total,paymentMethod} = req.body;
    
    if (!customerName) {
      return res.status(400).json({ message: "Customer name is required" });
    }
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items in order" });
    }

    const order = await Order.create({
      user: req.user._id,
      customerName,
      contactNumber,
      items,
      subtotal,
      tax,
      total,
      paymentMethod,
    });
    console.log("REQ BODY:", req.body);

    res.status(201).json({
      success: true,
      message: "Order saved successfully",
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
