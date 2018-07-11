const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');

exports.createUser = async (req, res) => {
  const chordSheet = new ChordSheet({title: 'Test Chord Sheet', chords: [['Em','0','2','2','0','0','0' ]]});
  console.log('before' + chordSheet);
  await chordSheet.save();
  console.log('after' + chordSheet);
  res.send('done');
  const user = new User(Object.assign({}, req.body, { chordSheets: [chordSheet] }));
  await user.save();
}