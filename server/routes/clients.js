const express = require("express");
const router = express.Router();
const Client = require("../models/client.model");

router.get("/", (req, res) => {
  Client.find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

module.exports = router;
