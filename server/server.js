const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
