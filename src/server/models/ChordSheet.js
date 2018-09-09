const mongoose = require('mongoose');

const chordSheetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter a chord sheet name'
  },
  chords: {
    type: [Array]
  },
});


module.exports = mongoose.model('ChordSheet', chordSheetSchema);