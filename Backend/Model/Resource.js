const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://entrepreneurhandbook.co.uk/wp-content/uploads/2021/03/Business-digital-tools.jpg.webp",
  },
});

module.exports = mongoose.model("ResourceCollection", ResourceSchema);
