const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
  cim: {
    type: String,
  },
  megjelenes: {
    type: String,
  },
  mufaj: {
    type: String,
  },
  szereplok: {
    type: String,
  },
  leiras: {
    type: String,
  },
});

module.exports = mongoose.model("sorozat", serieSchema);
