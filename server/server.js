const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const clientsRouter = require("./routes/clients");
const cors = require("cors");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const ATLAS = process.env.ATLAS;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(ATLAS);
mongoose.connection
  .once("open", () => {
    console.log("Connected to Atlas db");
  })
  .on("error", (error) => {
    console.log(`error: ${error}`);
  });

app.use("/clients", clientsRouter);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
