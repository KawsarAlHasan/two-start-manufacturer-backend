const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAdminStatus = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email };
    const user = await User.findOne(query);

    res.send({ isAdmin: user?.role === "admin" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.makeAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role: "admin" },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove admin role
exports.removeAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role: "user" },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedUser = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
      upsert: true,
    });

    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res.send({ updatedUser, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
