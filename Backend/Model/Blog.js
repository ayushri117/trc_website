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
    default: null,
  },
  info: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Blog", blogSchema);
