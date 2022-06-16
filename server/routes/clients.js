const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Client = require("../models/client.model");

router.get("/", async (req, res) => {
  try {
    const limit = 10;
    const pages = {
      current: null,
      next: null,
      prev: null,
    };

    pages.current = parseInt(req.query.page);

    if (!pages.current) {
      pages.current = 1;
    }

    const startIndex = (pages.current - 1) * limit;
    const endIndex = pages.current * limit;

    if (endIndex < (await Client.countDocuments())) {
      pages.next = pages.current + 1;
    }

    if (startIndex > 0) {
      pages.prev = pages.current - 1;
    }

    const clients = await Client.find()
      .sort({ _id: 1 })
      .limit(limit)
      .skip(startIndex);

    res.send({
      pages,
      clients,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
