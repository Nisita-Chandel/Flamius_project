// routes/orderRoutes.js
import express from "express";
import { createOrder } from "../controllers/order.controller.js";

import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, adminOnly);

export default router;
