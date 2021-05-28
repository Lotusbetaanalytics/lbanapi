const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  subject: {
    type: String,
    required: [true, "Please a Subject"],
  },
  message: {
    type: String,
    required: [true, "Please add a Message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
