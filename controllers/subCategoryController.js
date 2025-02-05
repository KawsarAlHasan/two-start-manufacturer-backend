const SubCategory = require("../models/subCategoryModel");

// Get all sub category
exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategories" });
  }
};

// Get single sub category by search
exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCategoryname = req.query.category;
    const subCategories = await SubCategory.find({ category: subCategoryname });
    res.json(subCategories);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch subcategories by category" });
  }
};

// new sub category create
exports.createSubCategory = async (req, res) => {
  try {
    const newCategory = new SubCategory(req.body);
    const result = await newCategory.save();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to create subcategory" });
  }
};

// delete sub category
exports.deleteSubCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await SubCategory.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Subcategory not found" });
    }
    res.send({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete subcategory" });
  }
};
