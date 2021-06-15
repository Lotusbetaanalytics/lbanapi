const mongoose = require("mongoose");

const CehSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please add First name"],
  },
  lastname: {
    type: String,
    required: [true, "Please add Last name"],
  },
  email: {
    type: String,
  },
  country: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  intrest: {
    type: String,
    required: [true, "Please a an Intrest"],
  },
  training: {
    type: String,
    required: [true, "Please add a Training"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ceh", CehSchema);
