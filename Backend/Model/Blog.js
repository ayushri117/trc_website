const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  auther: {
    type: String,
    required: true,
  },
  previewImg: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  info: {
    type: Array,
    default: [],
  },
  resourceRef: {
    type: Schema.Types.ObjectId,
    ref: "ResourceCollection",
  },
  linkYT: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
