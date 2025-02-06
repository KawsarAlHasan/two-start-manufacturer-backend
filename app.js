const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// routes
app.use("/users", require("./routes/userRoute"));
app.use("/category", require("./routes/categoryRoute"));
app.use("/subcategory", require("./routes/subCategoryRoute"));
app.use("/upComing", require("./routes/upComingRoute"));
app.use("/reviews", require("./routes/reviewsRoute"));

app.get("/", (req, res) => {
  res.send("Two Star Fashion Server is working");
});

// 404 Not Found Middleware
app.use("*", (req, res, next) => {
  res.status(404).json({
    error: "You have hit the wrong route",
  });
});

module.exports = app;
