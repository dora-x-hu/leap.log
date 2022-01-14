const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  user_id: String,
  isSelected: Boolean,
});

// compile model from schema
module.exports = mongoose.model("category", CategorySchema);
