const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Client = require("../models/client.model");

router.get("/", paginatiedResult(Client), (req, res) => {
  res.json(res.paginatied);
});

function paginatiedResult(model) {
  return async (req, res, next) => {
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

      if (endIndex < (await model.countDocuments())) {
        pages.next = pages.current + 1;
      }

      if (startIndex > 0) {
        pages.prev = pages.current - 1;
      }

      const clients = await model
        .find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(startIndex);

      res.paginatied = {
        pages,
        clients,
      };
    } catch (err) {
      res.json(err);
    }
    next();
  };
}

module.exports = router;
