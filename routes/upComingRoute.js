const express = require("express");
const {
  getUpComingProducts,
  addUpComingProduct,
  deleteUpComingProduct,
} = require("../controllers/upComingController");

const router = express.Router();

router.get("/", getUpComingProducts);
router.post("/", addUpComingProduct);
router.delete("/:id", deleteUpComingProduct);

module.exports = router;
