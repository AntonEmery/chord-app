const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');
const { promisify } = require('es6-promisify');

// exports.createUser = async (req, res) => {
//   const chordSheet = new ChordSheet({title: 'Test Chord Sheet', chords: [['Em','0','2','2','0','0','0' ]]});
//   await chordSheet.save();
//   const user = new User(Object.assign({}, req.body, { chordSheets: [chordSheet] }));
//   await user.save();
//   res.send('done');
// }

exports.createUser = (req, res, next) => {
  console.log(req.body)
  res.redirect('http://localhost:3000');
}

exports.validateRegister = (req, res, next) => {
  // sanitize data from form and ensure they are not blank
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name').notEmpty();
  req.checkBody('email', 'That email is not valid').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'You must supply a password').notEmpty();
  req.checkBody('confirmedPassword', 'Confirmed password cannot be blank').notEmpty();
  // checks that passwords match
  req.checkBody('confirmedPassword', 'Your passwords do not match').equals(req.body.password);

  // if errors log them and end the function
  const errors = req.validationErrors();
  if (errors) {
    errors.map(err => console.log(err))
    res.redirect('http://localhost:3000/register')
    return;
  }
  // else proceed to next middleware
  next();
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name, password: req.body.password });
  // .register is exposed from the passportLocalMongoose plugin used in our User schema
  await User.register(user, req.body.password);
  res.redirect('http://localhost:3000/chordsheets');
  next();
}

exports.resetPassword = (req, res) => {
  console.log(req.body);
  res.send('valid email');
}