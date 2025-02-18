const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  subcategory: String,
  email: String,
  quantity: Number,
  price: Number,
  productCode: String,
  salePrice: Number,
  orderQuantity: Number,
  description: String,
  gender: String,
  age: String,
  size: [String],
  customSize: String,
  colorfamily: [String],
  cColorfamily: String,
  brand: String,
  availability: String,
  img: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
