const express = require("express");
const router = express.Router();
const Channel = require("../models/Channel");

router.get("/", async (req, res) => {
  try {
    let filter = {};
    Object.keys(req.query).forEach((item)=> {

      if (item === "cat_id") {
        filter.categories = { $all: [Number(req.query.cat_id)] };
      }

      if(item === "user_count_gte"){
        filter.userCount = { $gte: Number(req.query.user_count_gte) }
      }

      // TODO:: Добавить фильтр для получения списка где количесвто пользователей меньше чем переданное значение
      // TODO:: query parametr: user_count_lte

    });
    const channels = await Channel.find(filter);
    res.json(channels);
  } catch (e) {
    res.json({ message: err });
  }
});

//Create channel
router.post("/", async (req, res) => {
  const channel = new Channel({
    title: req.body.title,
    description: req.body.description,
    categories: req.body.categories,
    userCount: req.body.userCount,
  });

  try {
    const savedChannel = await channel.save();
    res.json(savedChannel);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:channelId", async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.channelId);
    res.json(channel);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete
router.delete("/:channelId", async (req, res) => {
  try {
    const removedChannel = await Channel.remove({ _id: req.params.channelId });
    res.json(removedChannel);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update a channel
router.patch("/:channelId", async (req, res) => {
  try {
    const updatedChannel = await Channel.updateOne(
      { _id: req.params.channelId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedChannel);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
