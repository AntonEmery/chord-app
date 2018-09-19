const passport = require('passport');
const crypto = require('crypto'); // this module is included with node
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = passport.authenticate('local', {
  failureRedirect: 'http://localhost:3000',
  successRedirect: 'http://localhost:3000/chordsheets',
});

exports.isLoggedIn = (req, res) => {
  if(req.isAuthenticated()) {
    res.send({status: 'logged in'})
  } else {
    res.send({status: 'not logged in'})
  }
  res.end();
}
