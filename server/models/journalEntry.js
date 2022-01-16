//JournalEntry Schema

const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  question: String,
  content: String,
  user_id: String,
  day: Number, //in the format Date(year, month, day)
  month: Number,
  year: Number,
  //category: String,
  // parameter representing unique ID of this response
});
module.exports = mongoose.model("journalEntry", JournalEntrySchema);
