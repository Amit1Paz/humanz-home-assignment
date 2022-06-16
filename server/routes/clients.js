const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Client = require("../models/client.model");

const limit = 10;
const pages = {
  current: null,
  next: null,
  prev: null,
};

router.get("/", async (req, res) => {
  try {
    pages.current = parseInt(req.query.page);

    if (!pages.current) {
      pages.current = 1;
    }

    const startIndex = (pages.current - 1) * limit;
    const endIndex = pages.current * limit;

    const search = {};
    if (req.query.searchName) {
      search.Name = req.query.searchName;
      console.log(search);
    }

    const clients = await Client.find({ ...search })
      .sort({ _id: 1 })
      .limit(limit)
      .skip(startIndex);

    if (endIndex < (await Client.find({ ...search }).countDocuments())) {
      pages.next = pages.current + 1;
    }

    if (startIndex > 0) {
      pages.prev = pages.current - 1;
    }

    res.send({
      pages,
      clients,
    });
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const clientId = parseInt(req.params.id);
    Client.deleteOne({ ID: clientId }).then(console.log("deleted"));

    const startIndex = (pages.current - 1) * limit;
    const endIndex = pages.current * limit;
    const clients = await Client.find({})
      .sort({ _id: 1 })
      .limit(limit)
      .skip(startIndex);

    console.log(clients);

    if (endIndex < (await Client.find().countDocuments())) {
      pages.next = pages.current + 1;
    }

    if (startIndex > 0) {
      pages.prev = pages.current - 1;
    }

    res.send({
      pages,
      clients,
    });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const Name = req.body.Name;
    const ID = parseInt(req.body.ID);
    const Phone = parseInt(req.body.Phone);
    const Email = req.body.Email;
    const IP = req.body.IP;
    const newClient = new Client({
      Name: Name,
      ID: ID,
      Phone: Phone,
      Email: Email,
      IP: IP,
    });
    newClient.save();
    
    const startIndex = (pages.current - 1) * limit;
    const endIndex = pages.current * limit;

    const search = {};
    if (req.query.searchName) {
      search.Name = req.query.searchName;
      console.log(search);
    }

    const clients = await Client.find({ ...search })
      .sort({ _id: 1 })
      .limit(limit)
      .skip(startIndex);

    if (endIndex < (await Client.find({ ...search }).countDocuments())) {
      pages.next = pages.current + 1;
    }

    if (startIndex > 0) {
      pages.prev = pages.current - 1;
    }

    res.send({
      pages,
      clients,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
