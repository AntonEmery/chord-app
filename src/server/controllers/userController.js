const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');

// exports.createUser = async (req, res) => {
//   const chordSheet = new ChordSheet({title: 'Test Chord Sheet', chords: [['Em','0','2','2','0','0','0' ]]});
//   await chordSheet.save();
//   const user = new User(Object.assign({}, req.body, { chordSheets: [chordSheet] }));
//   await user.save();
//   res.send('done');
// }

exports.createUser = (req, res) => {
  console.log(req.body)
  res.redirect('http://localhost:3000');
}

exports.loginUser = async (req, res) => {
  console.log('Session', req.session.userId);
  const userQuery = User.where({ name: req.body.username, password: req.body.password });
  const user = await userQuery.findOne();
  req.session.userId = user._id;
  res.redirect('http://localhost:3000');
}

exports.createChordSheet = async (req, res) => {
  if(req.session.userId) {
    const userQuery = User.where({ _id: req.session.userId });
    const user = await userQuery.findOne();
    const newChordSheet = new ChordSheet({title: 'Test Chord Sheet', chords: [['Em','0','2','2','0','0','0' ]]});
    let chordSheet = await newChordSheet.save();
    // add chord sheet to user's chord sheets array on model
    user.chordSheets.push({_id: chordSheet._id});
    user.save();
    res.redirect('http://localhost:3000');
  }
}

exports.getChordSheets = async (req, res) => {
  if(req.session.userId) {
    const userQuery = User.where({ _id: req.session.userId });
    const user = await userQuery.findOne().populate('chordSheets');
    console.log(user.chordSheets);
    res.redirect('http://localhost:3000');
  }
}