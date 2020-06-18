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

//Delete

router.delete(
  "/:cat_Id",
  async (req, res) => {
    try {
      const removedCategory = await Category.remove({ _id: req.params.cat_Id });
      res.json(removedCategory);
    } catch (err) {
      res.json({ message: err });
    }
  },
  router.get("/:cat_id", async (req, res) => {
    try {
      const category = await Category.findById(req.params.cat_id);
      res.json(category);
    } catch (err) {
      res.json({ message: err });
    }
  })
);

module.exports = router;
