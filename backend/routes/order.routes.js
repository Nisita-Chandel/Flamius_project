import express from "express";
import { createOrder, getOrders } from "../controllers/order.controller.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, adminOnly, getOrders);

export default router;
