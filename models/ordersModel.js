const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: String,
  email: String,
  shippingEmail: String,
  phoneNumber: String,
  userAddress: String,
  streetAddress: String,
  airportorShippingPort: String,
  city: String,
  country: String,
  myOrdersInfo: [
    {
      partsId: mongoose.Schema.Types.ObjectId,
      parts: String,
      partsQuantity: String,
      minimumQuantity: String,
      pImg: String,
      pPrice: String,
      userQuantity: Number,
      email: String,
      amount: Number,
      productCode: String,
    },
  ],
  status: { type: String, default: "Pending" },
  shippingFee: Number,
  subTotalAmount: Number,
  totalQuantity: Number,
  totalAmount: Number,
  orderFormattedDate: String,
});

module.exports = mongoose.model("order", orderSchema);
