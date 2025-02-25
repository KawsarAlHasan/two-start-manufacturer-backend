const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.getOrdersByEmail);
router.post("/", ordersController.createOrder);
router.get("/manage", ordersController.getAllOrders);
router.put("/manage/:id", ordersController.updateOrderStatus);
router.get("/:id", ordersController.getOrderById);

module.exports = router;
