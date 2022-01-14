//JournalEntry Schema

const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  question: String,
  content: String,
  user_id: String,
  day: Date,
  //category: String,
});
module.exports = mongoose.model("journalEntry", JournalEntrySchema);
