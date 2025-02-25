const Order = require("../models/ordersModel");

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getOrdersByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const orders = await Order.find({ email });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true, upsert: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
