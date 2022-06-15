const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  ID: {
    type: Number,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  IP: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("client", ClientSchema);

module.exports = Client;
