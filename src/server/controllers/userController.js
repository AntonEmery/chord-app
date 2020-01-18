const mongoose = require('mongoose');
const User = mongoose.model('User');
const ChordSheet = mongoose.model('ChordSheet');
const { promisify } = require('es6-promisify');
const mail = require('../handlers/mail');
const crypto = require('crypto');

// exports.createUser = async (req, res) => {
//   const chordSheet = new ChordSheet({title: 'Test Chord Sheet', chords: [['Em','0','2','2','0','0','0' ]]});
//   await chordSheet.save();
//   const user = new User(Object.assign({}, req.body, { chordSheets: [chordSheet] }));
//   await user.save();
//   res.send('done');
// }

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
  const user = new User({
    email: req.body.email,
    name: req.body.name,
  });

  // .register is exposed from the passportLocalMongoose plugin used in our User schema
  const register = promisify(User.register.bind(User));
  await register(user, req.body.password).catch((err) => { console.log(err) })
  next();
}

exports.requestReset = async (req, res) => {
  console.log(req.body)
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // https://itnext.io/password-reset-emails-in-your-react-app-made-easy-with-nodemailer-bb27968310d7
    // Set token on user in database, one hour time limit
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordExpires = Date.now() + 3600000 // 1 hour from now
    await user.save();

    // email password reset page url, contains token
    const resetUrl = `http://localhost:3000/new-password/${user.resetPasswordToken}`;
    await mail.send({
      user,
      subject: 'Password Reset',
      html: resetUrl
    })
    res.send({ data: 'valid email' });
    // When they click on link, it directs them to the react route
    // Component gets token from url, checks in database if token still exists and is valid
    // If so, load component with form for email.
    // Submit form with new password, use the username that you got earlier to change that user's pw in the database
  } else {
    res.send('email not found');
  }
}

exports.verifyToken = async (req, res) => {
  console.log(req.body.token)
  const userToken = await User.findOne({ resetPasswordToken: req.body.token })
  console.log(userToken)

}

exports.setPassword = (req, res) => { }