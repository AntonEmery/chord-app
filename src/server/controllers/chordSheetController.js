const mongoose = require('mongoose');

const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');

exports.returnChordSheetById = async (req, res) => {
  const chordSheetId = req.params.id;
  const userQuery = User.where({ _id: req.user._id });
  const user = await userQuery.findOne();
  const targetId = await user.chordSheets.filter(
    (chordSheet) => chordSheet == chordSheetId.toString()
  );
  // Query chord sheet collection for that id
  ChordSheet.findById(targetId, (err, data) => {
    res.send(data);
  });
};

exports.saveChordSheet = async (req, res) => {
  const saveChordSheet = await ChordSheet.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    chords: req.body.chords,
  });
  res.send('chord sheet saved');
};

exports.createChordSheet = async (req, res) => {
  if (req.user._id) {
    const userQuery = User.where({ _id: req.user._id });
    const user = await userQuery.findOne();
    const newChordSheet = new ChordSheet({
      title: 'Untitled Chord Sheet',
      chords: [{ name: 'Em', 0: 0, 1: 3, 2: 2, 3: 2, 4: 0, 5: 0 }],
    });
    const chordSheet = await newChordSheet.save();
    // Add chord sheet to user's chord sheets array on model
    user.chordSheets.push({ _id: chordSheet._id });
    user.save();
    res.send({ id: chordSheet._id });
  }
};

exports.deleteChordSheet = async (req, res) => {
  const chordSheetId = req.body.id;
  const deleteStatus = await ChordSheet.deleteOne({ _id: chordSheetId });
  const deleteSuccess = deleteStatus.n > 0;

  if (deleteSuccess) {
    const userQuery = User.where({ _id: req.user._id });
    const user = await userQuery.findOne();
    const a = await user.update({ $pull: { chordSheets: chordSheetId } });
    res.send({ response: 'sheet deleted', id: chordSheetId });
  }
};

exports.returnChordSheetsByUser = async (req, res) => {
  console.log(req.user);
  if (req.user && req.user._id) {
    const userQuery = User.where({ _id: req.user._id });
    const user = await userQuery.findOne().populate('chordSheets');
    const chordSheets = await user.chordSheets;
    res.send(chordSheets);
  } else {
    res.send(req);
  }
};
