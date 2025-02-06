const UpComing = require("../models/upComingModel");

// Get all upcoming products
exports.getUpComingProducts = async (req, res) => {
  try {
    const products = await UpComing.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a new upcoming product
exports.addUpComingProduct = async (req, res) => {
  try {
    const newProduct = new UpComing(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an upcoming product
exports.deleteUpComingProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await UpComing.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
