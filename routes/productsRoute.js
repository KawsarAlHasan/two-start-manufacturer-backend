const express = require("express");
const {
  getAllProducts,
  getProductsByCategory,
  getProductById,
  deleteProductById,
  addProduct,
  updateProductById,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/category", getProductsByCategory);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
