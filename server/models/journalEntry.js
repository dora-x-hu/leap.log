//JournalEntry Schema

const mongoose = require("mongoose");

const JournalEntrySchema = new mongoose.Schema({
  question: String,
  content: String,
  user_id: String,
  day: Date,
  //category: String,
  // parameter representing unique ID of this response
});
module.exports = mongoose.model("journalEntry", JournalEntrySchema);
