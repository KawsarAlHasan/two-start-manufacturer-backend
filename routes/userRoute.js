const express = require("express");
const {
  getUsers,
  getAdminStatus,
  createUser,
  makeAdmin,
  removeAdmin,
  updateUserByEmail,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/admin/:email", getAdminStatus);
router.post("/", createUser);
router.put("/update/:email", updateUserByEmail);
router.put("/admin/:id", makeAdmin);
router.put("/admin/delete/:id", removeAdmin);

module.exports = router;
