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
  author: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    default:"Not sent" 
  },
  allowEdit:{
    type:Boolean,
    default:true,
  },
  previewImg: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  resourceRef: {
    type: Schema.Types.ObjectId,
    ref: "ResourceCollection",
  },
});

module.exports = mongoose.model("Blog", blogSchema);
