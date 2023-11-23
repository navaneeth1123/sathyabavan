const mongoose = require("mongoose");
const express = require("express");
const entriesRoute = require("./controllers/EntriesRoute");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://navaneeth:navaneeth123@cluster0.cxuiyiy.mongodb.net/entries";
mongoose.connect(uri);
var db = mongoose.connection;
db.on("error", () => {
  console.log("error occered");
});
db.once("open", () => {
  console.log("database connected");
});

app.use(express.json());
app.use(cors());
app.use("/entries", entriesRoute);

const port = 5500;
app.listen(port, () => {
  console.log("server started at", port);
});
