const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlwares
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

//Import routes
const channelsRoute = require("./routers/channels");
const categoriesRoute = require("./routers/category");
const uploadRoute = require("./routers/upload");

app.use("/channels", channelsRoute);
app.use("/category", categoriesRoute);
app.use("/upload", uploadRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/channels", (req, res) => {
  res.send("We are on Channels");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to DB!");
});

app.listen(9000);
