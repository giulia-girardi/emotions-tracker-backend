const express = require("express");
const router = express.Router();
const Emotions = require("../models/Emotions.model");
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/emotions", async (req, res, next) => {
  try {
    const emotions = await Emotions.find;
    res.json(emotions);
  } catch (error) {
    res.status(404).json({ message: "No Emotions found." });
  }
});
router.get("/emotions/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const emotion = await Emotions.findById(id);

    res.json({ ...emotion._doc });
  } catch (error) {
    res.status(404).json({ message: "No emotion with this id" });
  }
});

router.post("/emotions", async (req, res, next) => {
  try {
    const body = req.body;
    const currentUser = await User.findById(req.payload.user._id);
    const emotions = await Emotions.create({
      ...body,
      user: currentUser,
    });
    await User.findByIdAndUpdate(req.payload.user._id, {
      $push: { emotions: emotions },
    });

    res.status(201).json({ emotions });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
});
router.put("/emotions/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const emotion = await Emotions.findByIdAndUpdate(id, body, { new: true });

    res.json({ emotion });
  } catch (error) {
    res.status(404).json({ message: "Error" });
  }
});
router.delete("/emotions/:id", async (req, res, next) => {
  const { id } = req.params;
  const body = req.body.emotion;
  const emotion = await Emotions.findByIdAndDelete(id);
  /* const emotion = await Emotions.updateMany(
    { _id: id },
    { $unset: { body: "" } }
  ); */

  res.json(emotion);
});

module.exports = router;
