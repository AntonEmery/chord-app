const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');


exports.returnChordSheetById = (req, res) => {
  console.log('getting chord sheet by id');
};

exports.returnChordSheetByUser = (req, res) => {
  console.log('getting chord sheet by user');
};

exports.saveChordSheet = async (req, res) => {
  console.log(req.body);
  const userQuery = User.where({ _id: req.user._id });
  const user = await userQuery.findOne();
  const newChordSheet = new ChordSheet({ title: 'My Best Chords', chords: req.body });
  let chordSheet = await newChordSheet.save()
  // add chord sheet to user's chord sheets array on model
  user.chordSheets.push({ _id: chordSheet._id });
  user.save();
  res.send('chord sheet saved');
};

