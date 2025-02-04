const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Email address is required"],
      lowercase: true,
      unique: [true, "Email must be unique"],
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
