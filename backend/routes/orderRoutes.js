const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  getOrdersByUser,
} = require("../controllers/orderController");

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getOrders);

// Get Orders of One User
router.get("/:userId", getOrdersByUser);

module.exports = router;