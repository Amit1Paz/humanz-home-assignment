const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const ATLAS = process.env.ATLAS;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(ATLAS);
mongoose.connection
  .once("open", () => {
    console.log("Connected to Atlas db");
  })
  .on("error", (error) => {
    console.log(`error: ${error}`);
  });

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
