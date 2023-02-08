const { Schema, model } = require("mongoose");

// Emotions
const emotionsSchema = new Schema(
  {
    sadness: {
      type: Number,
      required: [true, "Please insert a value."],
    },
    anxiety: {
      type: Number,
      required: [true, "Please insert a value."],
    },
    anger: {
      type: Number,
      required: [true, "Please insert a value."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Emotions = model("Emotions", userSchema);

module.exports = Emotions;
