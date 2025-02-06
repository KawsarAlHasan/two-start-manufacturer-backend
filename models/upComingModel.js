const mongoose = require("mongoose");

const upComingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  img: { type: String, required: true },
});

const UpComing = mongoose.model("upComing", upComingSchema);

module.exports = UpComing;
