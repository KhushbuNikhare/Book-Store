const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
