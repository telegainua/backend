const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (e) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const categories = new Category({
    name: req.body.name,
    cat_id: req.body.cat_id,
  });

  try {
    const savedCategory = await categories.save();
    res.json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
