const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { dbConnect } = require("./utils/dbConnect");
const app = require("./app");

const cors = require("cors");
const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.options("", cors(corsConfig));

app.use(cors(corsConfig));

// database connection
dbConnect();

// server
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Two Star Fashion Server is running on port ${port}`);
});
