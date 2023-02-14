const { Schema, model } = require("mongoose");

// Emotions
const emotionsSchema = new Schema(
  {
    sadness: {
      type: Number,
      required: [true, "Please insert a value."],
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    anxiety: {
      type: Number,
      required: [true, "Please insert a value."],
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    anger: {
      type: Number,
      required: [true, "Please insert a value."],
      enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    date: { type: String },

    user: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Emotions = model("Emotions", emotionsSchema);

module.exports = Emotions;
