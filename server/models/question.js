const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  category_id: String, //which category it is, Category is another schema
  content: String,
  user_id: String,
  isSelected: Boolean,
});

// compile model from schema
module.exports = mongoose.model("question", QuestionSchema);
