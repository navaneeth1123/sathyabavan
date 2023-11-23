const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema(
  {
    name: { type: String },
    password: { type: String },
    firstname: { type: String },
    email: { type: String },
    mobileno: { type: String },
  },
  {
    collection: "employee",
  }
);

module.exports = mongoose.model("employee", entriesSchema);
