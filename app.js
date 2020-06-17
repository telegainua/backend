const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//Middlwares
app.use(bodyParser.json());

//Import routes
const channelsRoute = require("./routers/channels");
const categoriesRoute = require("./routers/category");

app.use("/channels", channelsRoute);
app.use("/category", categoriesRoute);

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

app.listen(3000);
