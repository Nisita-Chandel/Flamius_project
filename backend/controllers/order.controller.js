import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      contactNumber,
      items,
      subtotal,
      tax,
      total,
      paymentMethod,
    } = req.body;

    // Check authentication
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. Please login first.",
      });
    }

    // Customer Name Validation
    if (!customerName || customerName.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Customer name is required.",
      });
    }

    // Contact Number Validation
    if (!contactNumber || contactNumber.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Contact number is required.",
      });
    }

    // Items Validation
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty. Please add food items.",
      });
    }

    // Validate Payment Method
    const allowedPaymentMethods = ["Cash", "Card", "UPI", "Online"];

    if (
      paymentMethod &&
      !allowedPaymentMethods.includes(paymentMethod)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
    }

    // Create Order
    const order = await Order.create({
      user: req.user._id,
      customerName: customerName.trim(),
      contactNumber: contactNumber.trim(),
      items,
      subtotal: subtotal || 0,
      tax: tax || 0,
      total: total || 0,
      paymentMethod: paymentMethod || "Cash",
    });

    console.log("=========== NEW ORDER ===========");
    console.log(order);
    console.log("=================================");

    return res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};