const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post title is requried"],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2022/06/15/13/39/man-7263965_960_720.png",
  },
});

module.exports = mongoose.model("Post", postSchema);