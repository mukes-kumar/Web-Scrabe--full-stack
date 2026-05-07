const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
    required: true,
  },
  postedAt: {
    type: String,
    required: true,
  },
  scrapedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Story", storySchema);
