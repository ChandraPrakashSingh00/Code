const mongoose = require("mongoose");

/*
============================================================
  COUNTER MODEL
  Used to generate sequential certificate numbers like
  CPS/2026/INT/001, CPS/2026/INT/002, ...
============================================================
*/

const counterSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },

  value: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model(
  "Counter",
  counterSchema
);
