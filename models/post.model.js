const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  postedAt: {
    type: Date,
    default: new Date(),
  },
  content: {
    type: String,
  },
});

module.exports = model("post", PostSchema);
