const express = require("express");
const {
  getAllReviews,
  getReviewsByEmail,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewsController");

const router = express.Router();

router.get("/", getAllReviews);
router.get("/email", getReviewsByEmail);
router.get("/:id", getReviewById);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
