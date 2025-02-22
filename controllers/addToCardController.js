const AddToCard = require("../models/addToCardModel");

const getAddToCard = async (req, res) => {
  try {
    const email = req.query.email;
    const query = email ? { email } : {};
    const result = await AddToCard.find(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const deleteAddToCard = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await AddToCard.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const addToCard = async (req, res) => {
  try {
    const purchase = req.body;
    const { partsQuantity, minimumQuantity, userQuantity } = purchase;

    if (partsQuantity >= userQuantity && userQuantity >= minimumQuantity) {
      const newItem = new AddToCard(purchase);
      const result = await newItem.save();
      return res.status(201).json({ success: true, result });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid quantity" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { getAddToCard, deleteAddToCard, addToCard };
