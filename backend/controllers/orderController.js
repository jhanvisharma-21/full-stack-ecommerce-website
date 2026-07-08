const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
  try {
    const {
      user,
      items,
      shipping,
      paymentMethod,
      totalAmount,
    } = req.body;

    const order = await Order.create({
      user,
      items,
      shipping,
      paymentMethod,
      totalAmount,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Orders By User
const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.params.userId,
    }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrdersByUser,
};