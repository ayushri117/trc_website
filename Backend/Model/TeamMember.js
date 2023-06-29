const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isFaculty: {
    type: Boolean,
    required: true,
    default: false,
  },
  image: {
    type: String,
    default: "https://i.postimg.cc/63D6rsYQ/profile.png",
  },
  link1: {
    type: String,
    default: null,
  },
  link2: {
    type: String,
    default: null,
  },
  link3: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
