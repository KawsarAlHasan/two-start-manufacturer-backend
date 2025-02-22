const express = require("express");
const router = express.Router();
const {
  getAddToCard,
  deleteAddToCard,
  addToCard,
} = require("../controllers/addToCardController");

router.get("/", getAddToCard);

router.post("/", addToCard);

router.delete("/:id", deleteAddToCard);

module.exports = router;
