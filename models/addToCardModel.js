const mongoose = require("mongoose");

const addToCardSchema = new mongoose.Schema({
  productsId: { type: mongoose.Schema.Types.ObjectId, required: true },
  products: { type: String, required: true },
  partsQuantity: { type: Number, required: true },
  minimumQuantity: { type: Number, required: true },
  pImg: { type: String, required: true },
  pPrice: { type: Number, required: true },
  userQuantity: { type: Number, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  productCode: { type: String, required: true },
});

const AddToCard = mongoose.model("addToCard", addToCardSchema);
module.exports = AddToCard;
