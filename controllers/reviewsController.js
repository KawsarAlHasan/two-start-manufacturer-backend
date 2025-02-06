const Review = require("../models/reviewsModel");

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.send(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// get single review by email
exports.getReviewsByEmail = async (req, res) => {
  try {
    const email = req.query.email;
    const reviews = await Review.find({ email: email });
    res.send(reviews);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// get single review by id
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.send(review);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// create new reviews
exports.createReview = async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to add review", error });
  }
};

// review update
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.send(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to update review", error });
  }
};

// review delete
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.send({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
};
