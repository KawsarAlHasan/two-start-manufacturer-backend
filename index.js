const { dbConnect } = require("./utils/dbConnect");
const express = require("express");
const app = require("./app");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const globalCorsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(globalCorsOptions));
app.options("*", cors(globalCorsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection
dbConnect();

// server
const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Two Star Fashion Server is running on port ${port}`);
});
