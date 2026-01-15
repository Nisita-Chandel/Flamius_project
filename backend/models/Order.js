// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    contactNumber: {
      type: String,
      required: true,
    },

    items: [
      {
        category: String,
        itemName: String,
        quantity: Number,
        price: Number,
        notes: String,
      },
    ],

    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
