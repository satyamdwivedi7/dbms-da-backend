const express = require("express");
const mongoose = require("mongoose");
const routes = require("./pages/api/routes");
const cors = require("cors");
require("dotenv").config(); 

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(8000, () => {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to the Database successfully");
  });
});

module.exports = app;
