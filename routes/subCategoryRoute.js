const express = require("express");
const {
  getAllSubCategories,
  getSubCategoriesByCategory,
  createSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategoryController");

const router = express.Router();

router.get("/", getAllSubCategories);
router.get("/search", getSubCategoriesByCategory);
router.post("/", createSubCategory);
router.delete("/:id", deleteSubCategory);

module.exports = router;
