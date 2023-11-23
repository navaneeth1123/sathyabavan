const mongoose = require("mongoose");

const entriesSchema1 = new mongoose.Schema(
  {
    members: { type: String },
    date: { type: String },
    bookingname: { type: String },
  },
  {
    collection: "reservation",
  }
);

module.exports = mongoose.model("reservation", entriesSchema1);
