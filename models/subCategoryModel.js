const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  subcategory: { type: String, required: true },
  category: { type: String, required: true },
});

const SubCategory = mongoose.model("subcategory", subCategorySchema);

module.exports = SubCategory;
