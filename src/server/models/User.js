const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter a name'
  },
  chordSheets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChordSheet'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);