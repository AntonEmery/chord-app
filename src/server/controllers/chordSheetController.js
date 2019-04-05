const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');


exports.returnChordSheetById = async (req, res) => {
  const chordSheetId = req.params.id;
  const userQuery = await User.where({ _id: req.user._id });
  // filter chord sheet array attached to that user
  // return id that matches chordSheetId
  // query chord sheet collection for that id
  res.send('received chord sheet');
};

exports.saveChordSheet = async (req, res) => {
  const userQuery = User.where({ _id: req.user._id });
  const user = await userQuery.findOne();
  const newChordSheet = new ChordSheet({ title: req.body.title, chords: req.body.chords });
  let chordSheet = await newChordSheet.save()
  // add chord sheet to user's chord sheets array on model
  user.chordSheets.push({ _id: chordSheet._id });
  user.save();
  res.send('chord sheet saved');
};

exports.createChordSheet = async (req, res) => {
  if (req.session.userId) {
    const userQuery = User.where({ _id: req.session.userId });
    const user = await userQuery.findOne();
    const newChordSheet = new ChordSheet({ title: 'Test Chord Sheet', chords: [['Em', '0', '2', '2', '0', '0', '0']] });
    let chordSheet = await newChordSheet.save();
    // add chord sheet to user's chord sheets array on model
    user.chordSheets.push({ _id: chordSheet._id });
    user.save();
  }
}

exports.returnChordSheetsByUser = async (req, res) => {
  if (req.user._id) {
    const userQuery = User.where({ _id: req.user._id });
    const user = await userQuery.findOne().populate('chordSheets');
    const chordSheets = await user.chordSheets;
    res.send(chordSheets)
  }
}
