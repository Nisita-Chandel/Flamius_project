import express from "express";
import Reservation from "../models/Reservation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json({ success: true, reservation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
