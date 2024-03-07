const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
    title: String,
    content: String,
});

const JournalEntry = mongoose.model('JournalEntry', JournalEntrySchema);

module.exports = JournalEntry;
