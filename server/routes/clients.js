const express = require("express");
const router = express.Router();
const Client = require("../models/client.model");

router.get("/", async (req, res) => {
  try {
    const limit = 10;
    let page = parseInt(req.query.page);

    if (!page) {
      page = 1;
    }
    const startIndex = (page - 1) * limit;

    const clients = await Client.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(startIndex);

    res.send({
      page,
      clients,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
