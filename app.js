const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// Connect to MongoDB (you can also use this directly in the API route file)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });

module.exports = app;
