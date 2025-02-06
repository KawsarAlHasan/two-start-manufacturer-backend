const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  rating: { type: Number, required: true },
  userReview: { type: String, required: true },
  userImage: { type: String, required: true },
  email: { type: String },
});

const Review = mongoose.model("reviews", reviewSchema);

module.exports = Review;
