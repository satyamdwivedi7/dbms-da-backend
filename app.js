const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/data.route"); // Correctly require the routes file
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/data", routes);

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

app.listen(8000, () => {
  console.log("Running on port 8000");
});

module.exports = app;
